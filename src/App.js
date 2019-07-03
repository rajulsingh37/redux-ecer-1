import React, { Component } from "react";
import user from "./images/user.png";
import "./App.css";
import { createStore } from "redux";
import reducer from "./reducers";

const intialState = {
  name: "Rajul Singh",
  description: "Software Engineer SDE2",
  likes: "Books and music",
  location: "localhost"
};

const store = createStore(reducer, intialState);

class App extends Component {
  render() {
    const state = store.getState();
    const { name, description, likes, location } = state;
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
