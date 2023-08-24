import React, { FC } from "react";
import { CustomBtn } from "./styles";

interface CustombtnProps {
  text: string;
}

const Custombtn: FC<CustombtnProps> = ({ text }) => {
  return <CustomBtn className="custom-button">{text}</CustomBtn>;
};

export default Custombtn;
