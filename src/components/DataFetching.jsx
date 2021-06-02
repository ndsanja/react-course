import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  //fetching single data
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleButtonClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  //---fetching single data

  //fetching All Posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //---fetching All Posts

  return (
    <div>
      <input
        className="border-black border-2 rounded-md"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <div className="w-1"></div>
      <button
        className="border-black border-2 rounded-md py-1 px-2"
        onClick={handleButtonClick}
      >
        Feth Data
      </button>
      <div>
        <h2>{post.id}</h2>
        <h2>{post.title}</h2>
      </div>
      <br />
      <br />
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
