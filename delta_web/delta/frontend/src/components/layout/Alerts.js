import React, { Component,Fragment } from 'react'
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        errors: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps){
        const { error,alert,message } = this.props;

        // check for changed error
        if(error !== prevProps.error){
            if(error.msg.file_path){
                alert.error(`File Path: ${error.msg.file_path.join()}`);
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