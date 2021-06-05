import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

function UseReducerFetching() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something Error");
      });
  }, []);
  return (
    <div>
      {loading ? <div>Loading....</div> : <div>{post.title}</div>}
      {error != "" && <div>{error}</div>}
    </div>
  );
}

export default UseReducerFetching;
