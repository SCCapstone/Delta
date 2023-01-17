import React, { Component,Fragment } from 'react'
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps){
        const { error,alert,message } = this.props;

        // check for changed error
        if(error !== prevProps.error){
            if(error.msg.file_path){
                alert.error(`File Path: ${error.msg.file_path.join()}`);
            }
            if(error.msg.non_field_errors){
                alert.error(error.msg.non_field_errors.join());
            }
            if(error.msg.username){
                alert.error(error.msg.username.join());
            }
            if(error.msg.email){
                alert.error(error.msg.email.join())
            }
        }
        // check for changed message
        if(message !== prevProps.message){
            if(message.addCsvFileSuccess){
                alert.success(message.addCsvFileSuccess);
            }
            if(message.addCsvFileError){
                alert.error(message.addCsvFileError);
            }
            if(message.updateCsvFileSuccess){
                alert.success(message.updateCsvFileSuccess);
            }
            if(message.deleteCsvFile){
                alert.success(message.deleteCsvFile);
            }
            if(message.updateUser){
                alert.success(message.updateUser);
            }
            if(message.updateUserFail){
                alert.error(message.updateUserFail);
            }
            if(message.registerUser){
                alert.success(message.registerUser);
            }
            if(message.registerFail){
                alert.error(message.registerFail);
            }
            if(message.passwordsDoNotMatch){
                alert.error(message.passwordsDoNotMatch);
            }
            if(message.addReviewSuccess){
                alert.success(message.addReviewSuccess);
            }
            if(message.addReviewFail){
                alert.error(message.addReviewFail);
            }
            if(message.deleteReviewSuccess){
                alert.success(message.deleteReviewSuccess);
            }
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error:state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));