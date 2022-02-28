/**
 * @description Common Input box
 * @createdDate 27/02/2022 @author Nithya
 */
import React from "react";
import { Input } from "antd";

export const InputBox = (props) => {
  // props
  const { userInput, handleChange, handleSubmit } = props;
  return (
    <Input
      placeholder="Enter Task"
      value={userInput}
      onChange={handleChange}
      onPressEnter={() => handleSubmit()}
    />
  );
};
