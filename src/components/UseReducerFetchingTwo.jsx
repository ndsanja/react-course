import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "succes":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "error":
      return {
        loading: false,
        post: {},
        error: "something when wrong",
      };
    default:
      return state;
  }
};

function UseReducerFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/100")
      .then((response) => {
        dispatch({ type: "succes", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "error" });
      });
  }, []);
  return (
    <div>
      {state.loading ? <div>Loading....</div> : <div>{state.post.title}</div>}
      {state.error != "" && <div>{state.error}</div>}
    </div>
  );
}

export default UseReducerFetchingTwo;
