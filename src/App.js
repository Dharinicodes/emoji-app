import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😑": "annoyance",
  "😉": "Winking Face",
  "🫠": "Melting Face",
  "🫡": "Saluting Face",
  "🤩": "Star Struck",
  "🥡": "takeout box",
  "❤️": "love",
  "🫶": "Heart Hands",
  "🙌": "Raising Hands",
  "🎂": "Birthday Cake",
  "🎈": "Balloon",
  "🎉": "Party Popper",
  "🎁": "Wrapped Gift",
  "🥳": "Partying Face",
  "🤧": "Sneezing Face",
  "😢": "Crying Face",
  "😣": "Persevering Face",
  "😧": "Anguished Face",
  "😟": "Worried Face",
  "🤤": "Drooling Face",
  "😨": "Fearful Face",
  "🍎": "apple",
  "🐶": "dog",
  "🚗": "car",
  "📱": "smartphone",
  "🌞": "sun",
  "📚": "book",
  "⌛": "hourglass",
  "✉️": "envelope"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "sorry, we don't have meaning for this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Express ^_^ </h1>
      <input
        placeholder="Search the meaning behind the emoji here"
        onClick={emojiInputHandler}
      ></input>
      <h2> {meaning} </h2>
      <h3> emojis we know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
