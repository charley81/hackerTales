import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Layout from "./layout/layout";
import List from "./List";
import InputWithLabel from "./InputWithLabel";

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};

export default function App() {
  const initialStories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectId: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectId: 1,
    },
  ];

  const [stories, setStories] = useState(initialStories);
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectId !== story.objectId
    );

    setStories(newStories);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchedStories = initialStories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        onInputChange={handleSearch}
        value={searchTerm}
        id="search"
        label="Search"
        isFocused
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </Layout>
  );
}

render(React.createElement(App), document.getElementById("root"));
