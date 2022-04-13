import React, { useState } from "react";
const AddNote = (props) => {
  const [val, setval] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setval((preval) => {
      return { ...preval, [name]: value };
    });
  };
  const addEvent = (e) => {
    e.preventDefault();
    props.addData(val);
    setval({
      title: "",
      content: "",
    });
  };
  return (
    <>
      <div className="addNote">
        <form className="GK_form">
          <input
            type="text"
            value={val.title}
            name="title"
            className="title"
            placeholder="title"
            onChange={inputEvent}
          />
          <textarea
            name="content"
            value={val.content}
            cols=""
            rows=""
            placeholder="note"
            className="content"
            onChange={inputEvent}
          ></textarea>
          <button className="submit-btn" onClick={addEvent}>
            add
          </button>
        </form>
      </div>
    </>
  );
};
export default AddNote;
