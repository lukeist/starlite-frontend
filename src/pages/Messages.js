import { useSelector } from "react-redux";
import Message from "../components/Messages-Message";

const Messages = () => {
  const { tradeMessages } = useSelector((state) => state.messages);

  return (
    <div className="home">
      {tradeMessages.length === 0 ? (
        <div className="home-body">
          <p className="block-message-empty">
            You have no messages. Go buy and sell something!
          </p>
        </div>
      ) : (
        <div className="home-body">
          {tradeMessages.map((tradeMessage) => (
            <div className="block-message">
              <div className="text-message">
                <Message key={tradeMessage.id} tradeMessage={tradeMessage} />
              </div>
              <p className="text-timestamp"> {tradeMessage.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
