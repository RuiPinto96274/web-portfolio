import React, { FC } from "react";
import { CustomBtn } from "./styles";

interface CustombtnProps {
  text: string;
  onClick?: () => void;
}

const Custombtn: FC<CustombtnProps> = ({ text, onClick }) => {
  return (
    <CustomBtn className="custom-button" onClick={onClick}>
      {text}
    </CustomBtn>
  );
};

export default Custombtn;
