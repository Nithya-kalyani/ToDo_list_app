import React from "react";
import Header from "./header";
import ToDo from "./toDo";
import "./home.css";

export const Home = (props) => {
  // state
  const [contentHeight, setContentHeight] = React.useState(null);

  // Update content height automatically
  React.useEffect(() => {
    setContentHeight(
      document.body.offsetHeight -
        document.getElementById("headerSection").offsetHeight
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/** @desc  Header */}
      <Header />
      {/** @desc  Main Container */}
      <ToDo contentHeight={contentHeight} />
    </div>
  );
};
