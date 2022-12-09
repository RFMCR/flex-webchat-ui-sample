// import React from 'react';
// import * as FlexWebChat from "@twilio/flex-webchat-ui";

// //import customState from './Store/state';
// //import customReducer from './Store/Reducers/customReducer';
// //import EndChatModal from './components/endChatModal'
// //import EndChatButton from './components/endChatButton'

// class App extends React.Component {

//   //state = {};

//   constructor(props) {
//     super(props);

//     const { configuration } = props;
//     FlexWebChat.Manager.create(configuration)
//       .then((manager) => {
//         // Add the EndChat component into FlexWebChat
//         // FlexWebChat.MainHeader.Content.add(<MinimizeButton key="mimize-chat" />, { sortOrder: -1, align: "end" });
//         // FlexWebChat.MainHeader.Content.add(<CloseButton key="close-chat" runtimeDomain={AppConfig.current().runtimeDomain} manager={manager} />, { sortOrder: -1, align: "end" });
//         // FlexWebChat.MainHeader.Content.remove("close-button");

//         //customState.addReducer('custom', customReducer);
//         //manager.store.replaceReducer(customState.combinedReducers());

//         //FlexWebChat.MessagingCanvas.Content.add(<EndChatModal manager={manager} key="end-chat-modal" />)

//         // FlexWebChat.MainHeader.Content.remove('close-button');
//         //FlexWebChat.MainHeader.Content.add(<EndChatButton key="end-chat-button" />, { sortOrder: -1, align: "end" });
      

//         //this.setState({ manager })
//       })
//       .catch(error => this.setState({ error }));

      

//   }

//   render() {
//     // const { manager, error } = this.state;

//     // if (manager) {

//     //   //FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = false;
//     //   FlexWebChat.MainHeader.defaultProps.titleText = "Habla con nosotros"
     

//     //   FlexWebChat.Actions.on("afterStartEngagement", (payload) => {
//     //     const { question } = payload.formData;
//     //     console.log(FlexWebChat.Actions)
//     //     if (!question) return;

//     //     const { channelSid } = manager.store.getState().flex.session;
        
//     //     manager.chatClient.getChannelBySid(channelSid)
//     //       .then(channel => {
//     //         channel.sendMessage(question)
//     //       })

//     //   })

      
//       // manager.strings.EntryPointTagline = "Contactanos!!";
//       // manager.strings.MessageCanvasTrayContent = `
//       //     <h6>Gracias por contactarnos!</h6>
//       //     <p>Si tiene mas dudas, no dude en chatear con nosotros de nuevo.</p>`;
//       // manager.strings.MessageCanvasTrayButton = "Comanzar Chat";
//       // manager.strings.InvalidPreEngagementMessage = "Pre-engagement forms have not been set and are required to initiate the web-chat. Please configure these now in setup.";
//       // manager.strings.InvalidPreEngagementButton = "Boton Invalido";
//       // manager.strings.PredefinedChatMessageAuthorName = "Bot";
//       // manager.strings.PredefinedChatMessageBody = "Hola, en que te ayudo?";
//       // manager.strings.InputPlaceHolder = "Tu mensaje Aqui!";
//       // manager.strings.TypingIndicator = "{{name}} esta escribiendo ... ";
//       // manager.strings.Read = "Leer";
//       // manager.strings.MessageSendingDisabled = "El envio de mensajes se deshabilito";
//       // manager.strings.Today = "Hoy";
//       // manager.strings.Yesterday = "Ayer";
//       // manager.strings.MessageCanvasTrayButton = "COMENZAR NUEVO";
//       // manager.strings.WelcomeMessage = "Mensaje de Bienvenida";
//       // manager.strings.Save = "SALVER";
//       // manager.strings.Reset = "RESETEAER";
//       // manager.strings.MessageCharacterCountStatus = "{{currentCharCount}} / {{maxCharCount}}";
//       // manager.strings.SendMessageTooltip = "Enviar Mensaje";
//       // manager.strings.FieldValidationRequiredField = "Campo requerido";
//       // manager.strings.FieldValidationInvalidEmail = "Direccion invalida";

//       // if(manager.store.getState().flex.session.isEntryPointExpanded){        
//       //   FlexWebChat.Actions.invokeAction("ToggleChatVisibility");        
//       // }



//       return (
//         <FlexWebChat.ContextProvider manager={manager}>
//           <FlexWebChat.RootContainer />
//         </FlexWebChat.ContextProvider>
//       );
//     }

//   //   if (error) {
//   //     console.error("Failed to initialize Flex Web Chat", error);
//   //   }

//   //   return null;
//   // }
// }

// export default App;


import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";

class App extends React.Component {

  componentDidUpdate() {    
    //FlexWebChat.Actions.invokeAction("ToggleChatVisibility");   
    FlexWebChat.Actions.invokeAction("MinimizeChat");       
}


  state = {};

  constructor(props) {
    super(props);

    const { configuration } = props;
    FlexWebChat.Manager.create(configuration)
      .then(manager => this.setState({ manager }))
      .catch(error => this.setState({ error }));
  }

  

  render() {
    const { manager, error } = this.state;
    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
}

export default App;