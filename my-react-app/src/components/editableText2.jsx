// components/EditableText2.js

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditableText2({ initialText2, onSave }) {
  const [isEditing2, setIsEditing2] = useState(false);
  const [text2, setText2] = useState(initialText2);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDoubleClick2 = () => setIsEditing2(true);

  const handleBlur2 = () => {
    setIsEditing2(false);
    onSave(text2);
  };

  const handleKeyDown2 = (e) => {
    if (e.key === "Enter") {
      setIsEditing2(false);
      onSave(text2);
      navigate(`/notes/${id}`, { state: { message: "Note's description updated successfully!" } });
    }
  };

  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  return isEditing2 ? (
    <input
      type="text"
      style={{ backgroundColor: "rgb(24, 22, 26)", color: "white", borderColor: "transparent" }}
      value={text2}
      onChange={handleChange2}
      onBlur={handleBlur2}
      onKeyDown={handleKeyDown2}
      autoFocus
      className="form-control"
    />
  ) : (
    <h5 className="text-white" onDoubleClick={handleDoubleClick2}>
      {text2}
    </h5>
  );
}

export default EditableText2;
