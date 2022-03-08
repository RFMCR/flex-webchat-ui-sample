var appConfig = {
    //  change the your AccountSid
    accountSid: "AC...",
    // change to your Flex Flow SID
    flexFlowSid: "FO...",
    colorTheme: {
        overrides: brandedColors
    },
    disableLocalStorage:false,
    available:true,
    componentProps: {
        // MessagingCanvas: {
        //     avatarCallback: (identity) => SessionActions.getAgentAvatar(identity),  //It breaks here! Code taken from https://www.twilio.com/docs/flex/developer/messaging/webchat/configuration
        //     showTrayOnInactive: true 
        // },   
        MessageCanvasTray: {
             onButtonClick: () => Actions.invokeAction("RestartEngagement") //It breaks here! Code taken from https://www.twilio.com/docs/flex/developer/messaging/webchat/configuration
            //onButtonClick: () => {alert("I am getting here")} //This works

            //Other resources 
            //https://www.twilio.com/docs/flex/developer/messaging/webchat/setup

        }        
    },

    tokenServerUrl: "https://iam.twilio.com/v1/Accounts/{accountSid}/Tokens",
    flexWebChannelsUrl: "https://flex-api.twilio.com/v1/WebChannels",
    context: {
        friendlyName: "Anonymous"
    },
    startEngagementOnInit: false,
    preEngagementConfig: {
        description: "Please provide some information",
        fields: [
            {
                label: "What is your name?",
                type: "InputItem",
                attributes: {
                    name: "friendlyName",
                    type: "text",
                    required: true,
                    placeholder:"Enter your name",
                }
            },
            {
                label:"What is your email?",
                type: "InputItem",
                attributes:{
                    name:"email",
                    type:"email",
                    placeholder:"Enter your email",
                    required:true,
                }                
            },
            {
                label:"My awesome dropdown",
                type:"SelectItem",
                attributes:{
                    name:"My Awesome dropdown",
                    required:true,
                },
                options:[
                    {
                        value:"value1",
                        label:"label1",
                        selected:false
                    },
                    {
                        value:"value2",
                        label:"label2",
                        selected:true
                    },
                ]
            },
            {
                label: "What is your question?",
                type: "TextareaItem",
                attributes: {
                    name: "question",
                    type: "text",
                    placeholder: "Type your question here",
                    required: false,
                    rows: 5
                }
            }, 
        ],
        footerLabel:"I am a footer",
        submitLabel: "Ok Let's Go!"
    }
}