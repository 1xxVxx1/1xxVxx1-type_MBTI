import InfoTitle from "../components/InfoTitle";
import MBTIPart from "../components/MBTIPart";
import styled from "styled-components";
import { MouseEvent, useState } from "react";
import React from 'react';


function MainPage ({className= ""}: {className: string}) {
  const [selectMBTI, setSelectMBTI] = useState<string>("");
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    const textValue = target.innerText as string;
    setSelectMBTI(textValue);
  };
  return (
    <div className={className}>
      <InfoTitle className="" selectMBTI={selectMBTI} onDelete={handleClick}/>
      <MBTIPart className="" onClick={handleClick}/>
    </div>
  )
};

const IndexPage = styled(MainPage)`
  width: 865px;
  margin: 60px auto;
  display: flex;
  gap: 39px;
  justify-content: space-between;
`;

export default IndexPage;