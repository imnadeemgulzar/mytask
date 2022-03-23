import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const FirstPage = () => {
  const [user, setuser] = useState([]);
  const getData = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    setuser(await response.json());
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: `darkorange`,
          padding: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {user.map((curEL, id) => {
          return (
            <div
              className="card"
              key={id}
              style={{
                padding: ".5rem",
                backgroundColor: "darkcyan",
                margin: "1rem",
                minWidth: "20rem",
                alignItems: "center",
                display: "flex",
                color: "#fff",
                borderRadius: ".5rem",
                flexDirection: "column",
                textTransform: "capitalize",
              }}
            >
              <h1 className="showid">name : {curEL.show.name}</h1>
              <h2 className="showname">score : {curEL.score}</h2>
              <h2 className="showlang">lang : {curEL.show.language}</h2>
              <h2 className="showlang">id : {curEL.show.id}</h2>
              <Link to={"/SecondPage"}>
                <button
                  style={{
                    border: "none",
                    outline: "none",
                    padding: ".4rem 1.4rem",
                    fontSize: "1.3rem",
                    borderRadius: ".4rem",
                    backgroundColor: "green",
                    color: "#fff",
                  }}
                >
                  summary
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FirstPage;
