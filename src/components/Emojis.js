// import { useRef, useState } from "react";
// import Picker from "emoji-picker-react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const Emojis = ({ updateWatchList, setEmoji }) => {
  // const [chosenEmoji, setChosenEmoji] = useState(null);
  // const [message, setMessageForm] = useState("");
  // const ref = useRef(null);
  const onSelect = (emoji) => {
    setEmoji(emoji.native);
    updateWatchList({ emoji: emoji.native });
    // console.log(emoji.native);
  };
  return <Picker theme="dark" onSelect={onSelect} />;
};

export default Emojis;
