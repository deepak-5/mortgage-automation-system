import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chatbot.css";

const OPENAI_KEY = "YOUR_OPENAI_KEY";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    // Define a function that sends a request to OpenAI API
    const sendRequest = async () => {
      // Get the prompt from the messages state
      let prompt = "";
      for (let message of messages) {
        prompt += `[${message.role}]: ${message.content}\n`;
      }
      prompt += "[Chatbot]:";
      // Define the parameters for the chat completion
      let data = {
        prompt: prompt,
        temperature: 0.9,
        max_tokens: 50,
        stop: "\n",
      };
      // Define the header with authorization key
      let config = {
        headers: {
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
      };
      // Send a POST request to OpenAI API
      try {
        let response = await axios.post(
          "https://api.openai.com/v1/engines/model-gpt-3.5-turbo/completions",
          data,
          config
        );
        // Get the chatbot message from the response
        let chatbotMessage = response.data.choices[0].text.trim();
        // Update the messages state with the new chatbot message
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "Chatbot", content: chatbotMessage },
        ]);
        // Get the answer from the OpenAI API
        let answer = response.data.choices[0].answer.trim();
        // Highlight the answer in a separate space
        let answerDiv = document.createElement("div");
        answerDiv.className = "answer";
        answerDiv.innerHTML = answer;
        // Append the answer to the chat history
        document.querySelector(".chat-history").appendChild(answerDiv);
        // Update the answer state with the new answer
        setAnswer(answer);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };
    // Call the function if the messages state is not empty
    if (messages.length > 0) {
      sendRequest();
    }
  }, [messages]); // Add messages as a dependency

  // Define a function that handles user input change
  const handleChange = (event) => {
    // Get the value from the event target
    let value = event.target.value;
    // Update the input state with the value
    setInput(value);
  };

  // Define a function that handles user input submission
  const handleSubmit = (event) => {
    // Prevent the default behavior of the event
    event.preventDefault();
    // Update the messages state with the new user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "User", content: input },
    ]);
    // Clear the input state and reset the input field
    setInput("");
    event.target.reset();
  };

  // Return a JSX element that renders the chatbot interface
  return (
    <div className="chatbot">
      <div className="chat-history">
        {messages.map((message, index) => (
          <p
            key={index}
            className={
              message.role === "User" ? "user-message" : "chatbot-message"
            }
          >
            {message.content}
          </p>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          onChange={handleChange}
          placeholder="Type something and press enter"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
