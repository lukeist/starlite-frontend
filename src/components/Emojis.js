// import { useRef, useState } from "react";
import Picker from "emoji-picker-react";

const Emojis = ({ updateWatchList, setEmoji }) => {
  // const [chosenEmoji, setChosenEmoji] = useState(null);
  // const [message, setMessageForm] = useState("");
  // const ref = useRef(null);
  const onEmojiClick = (
    // event,
    emojiObject
  ) => {
    setEmoji(emojiObject.emoji);
    updateWatchList({ emoji: emojiObject.emoji });
  };
  return <Picker onEmojiClick={onEmojiClick} />;
};

export default Emojis;
