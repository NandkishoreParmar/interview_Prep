import React from "react";
import { Button } from "antd";

const MyButton = ({title,Counter})=> {
  return (
    <Button type="primary" onClick={Counter}>{title}</Button>
  )
}

export default MyButton;