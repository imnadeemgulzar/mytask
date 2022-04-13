import React, { useState } from "react";
import Header from "./header";
import SingleNote from "./singleNote";
import AddNote from "./addNote";
const Note = () => {
  const [mycard, setmyCard] = useState([]);
  const addCard = (val) => {
    setmyCard((pre) => {
      return [...pre, val];
    });
  };
  const dltCard = (id) => {
    setmyCard((pre) =>
      pre.filter((el, index) => {
        return id !== index;
      })
    );
  };
  return (
    <>
      <Header />
      <AddNote addData={addCard} />
      <div className="singleCard">
        {mycard.map((cur, index) => {
          return (
            <SingleNote
              rmCard={dltCard}
              key={index}
              id={index}
              title={cur.title}
              content={cur.content}
            />
          );
        })}
      </div>
    </>
  );
};
export default Note;
