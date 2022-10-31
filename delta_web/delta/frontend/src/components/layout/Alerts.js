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
        }
        // check for changed message
        if(message !== prevProps.message){
            if(message.deleteDataAccel){
                alert.success(message.deleteDataAccel);
            }
            if(message.addDataAccel){
                alert.success(message.addDataAccel);
            }
            if(message.addCsvFile){
                alert.success(message.addCsvFile);
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
            if(message.passwordsDoNotMatch){
                alert.error(message.passwordsDoNotMatch);
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