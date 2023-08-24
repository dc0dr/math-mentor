import "../../styles/Messages.scss";
//import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";

const API_KEY = "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";

function MessagesPage() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am the MathMentor. How may I help you today?",
      sender: "MatheMentor",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "User",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage]; //all the old messages + new message

    // update message state
    setMessages(newMessages);

    // set a typing indicator
    setTyping(true);

    // process message to ChatGPT
    await processMessage(newMessages);
  };

  async function processMessage(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "MathMentor") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content:
        "You are a AI tutor whose job to help students get better at mathematics.",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo-16k",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "MathMentor",
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <div className="Messages">
      <div style={{ position: "relative", height: "100vh", width: "70vw" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={
                typing ? (
                  <TypingIndicator content="MathMentor is typing" />
                ) : null
              }
            >
              {messages.map((message, index) => {
                return <Message key={index} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default MessagesPage;
