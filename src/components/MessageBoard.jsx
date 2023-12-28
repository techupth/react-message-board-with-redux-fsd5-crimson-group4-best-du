import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBoard, deleteBoard } from "../slices/messageBoardSlice";

function MessageBoard() {
  const boards = useSelector((state) => state.board.boards);
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(addBoard(newMessage));
    setNewMessage("");
  };

  const handleDelete = (index) => {
    dispatch(deleteBoard(index));
  };

  console.log(boards);

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={newMessage}
            onChange={handleInputChange}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="board">
        {boards.map((item, index) => (
          <div key={index} className="message">
            <h1>{item}</h1>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
