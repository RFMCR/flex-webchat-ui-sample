import React from 'react';
import { connect } from 'react-redux';
import * as FlexWebChat from "@twilio/flex-webchat-ui";

import Url from 'url'
import Axios from 'axios';


const center = {
  textAlign: 'center',
  position: 'absolute',
  paddingTop: '50%',
//   top: '0px',
//   bottom: '0px',
  left: '0px',
  right: '0px',
  background: 'rgba(255, 255, 255, 1)'
};

class EndChatModal extends React.Component {

  /**
   * onClick handler, ends the chat and invokes the minimize action
   */
   async handleClick() {
    await this.endChat();
    FlexWebChat.Actions.invokeAction("MinimizeChat");
  }

  // Run the Serverless Function to end the chat channel and task
  async endChat() {    
    let state = this.props.manager.store.getState();
    if (state.flex && state.flex.session && state.flex.session.channelSid) {
      let channelSid = state.flex.session.channelSid;


      // Build out the config blocks for Axios
      let axiosBody = {
        channelSid: channelSid,
      };
      let axiosOptions = {
        headers: {
          'Content-Type': 'application/json',
        }
      };
      let url = Url.resolve(state.flex.config.runtimeDomain, 'endChat');

      // Make it happen!
      return Axios.post(url, axiosBody, axiosOptions);
    }
  }


  constructor(props) {
    super();
      this.props = props;
  }

    render() {
    return (
      this.props.showEndChatModal ?
        <div style={ center }>
                <p>Are you sure you want to end the chat?</p>
                <FlexWebChat.Button onClick={this.handleClick.bind(this)}>Yes</FlexWebChat.Button>
                <FlexWebChat.Button onClick={() => {
                    return this.props.dispatch({
                        type: 'SET_SHOW_END_CHAT_MODAL',
                        payload: { showEndChatModal: false }
                    })
                }}>No</FlexWebChat.Button>
        </div> : null
    )
  }
}

function mapStateToProps(state) {
  return { showEndChatModal: state.custom.showEndChatModal }
}

export default connect(mapStateToProps)(EndChatModal);