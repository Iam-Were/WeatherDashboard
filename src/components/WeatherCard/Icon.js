import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;

  return <img className="icon" src="./img/overcast.png" alt="Weather Icon" />;
};

export default Icon;
