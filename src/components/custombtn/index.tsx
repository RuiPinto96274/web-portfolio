import React, { FC } from "react";
import { CustomBtn } from "./styles";

interface CustombtnProps {
  text: string;
  onClick?: () => void;
  openPdfInNewTab?: string;
}

const Custombtn: FC<CustombtnProps> = ({ text, onClick, openPdfInNewTab }) => {
  const handleClick = () => {
    if (openPdfInNewTab) {
      window.open(openPdfInNewTab, "_blank");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <CustomBtn className="custom-button" onClick={handleClick}>
      {text}
    </CustomBtn>
  );
};

export default Custombtn;
