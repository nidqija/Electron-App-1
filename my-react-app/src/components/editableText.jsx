// components/EditableText.js

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditableText({ initialText, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDoubleClick = () => setIsEditing(true);

  const handleBlur = () => {
    setIsEditing(false);
    onSave(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      onSave(text);
      navigate(`/notes/${id}`, { state: { message: "Note's title updated successfully!" } });
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return isEditing ? (
    <input
      type="text"
      style={{ backgroundColor: "rgb(24, 22, 26)", color: "white", borderColor: "transparent" }}
      value={text}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      autoFocus
      className="form-control"
    />
  ) : (
    <h3 className="text-white" onDoubleClick={handleDoubleClick}>
      {text}
    </h3>
  );
}
