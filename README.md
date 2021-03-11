# Basic info on ChatBot App
## Description of project being done. 
The project being done consists of two main elements, the back end of the chat bot which is handled by an API that sends back the user responses in text form, and user interface or view of the bot as a widget where a user can interact with the bot. The bot has the job to create, modify and delete appointments created by the user. This is in regards to a store, doctor's appointment or any type of appointment a user may need to set up with a service provider. 

## Limitations of project. 
As it stands currently the system is not so smart, users can have different ways of saying things and the system will not capture what the user is trying to say exactly. There is always a fallback message in the case that the bot doesn't understand the user output but, there's many instances where the bot does not understand the input of the user and the user has to figure out ways to make the bot understand what they are trying to say. 

## Documentation
* Start the application by typing npm install
* Then type npm start or yarn start

### Framework Used
Our project used React.JS as the front-end and view of our application. We used Twilio API to store and handle user incoming messages. We performed a data training on the ML model, given samples of the possible messages that a user may sent to the Twilio API. 

### Class Method Documentation
In our React.JS, we organized our App class to import react widgit to render chat view, and import axios to sent HTTP Post request to an URL. 

The App class has a handleNewUserMessage function that passes a message argument and send a promise to the Twilio Api with response text passed into addResponseMessage function. 

The addResponseMessage function returns the ML generated message.
