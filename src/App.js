import logo from "./logo.svg";
import "./App.css";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import axios from "axios";
import { useEffect } from "react";

function App() {

  const id = Math.random();

  //message handler
  const handleNewUserMessage = (message) => {
    axios
      .post("https://chatbot-service-9775.twil.io/chat", {
        message,
        id,
      })

    })
  };

      .then((response) => {
        response.data.response.says.forEach((say) => {
          addResponseMessage(say.text);
        });
      });
  }; //


  useEffect(() => {
    addResponseMessage("Welcome!");
  }, []);




  return (
    <div className="App">
      <header className="App-header">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Appointments Chat Bot"
          subtitle="Ask this bot questions about products and appointments."
        />
        <h1>ChatBot Widget App</h1>
      </header>
    </div>
  );
}

export default App;
