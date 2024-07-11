import NewInputLink from "./NewInputLink";
import MBTILists from "./MBTILists";
import styled from "styled-components";
import { MouseEvent } from "react";
import React from 'react';


function CompMBTIPart ({className = "", onClick}: {className: string, onClick: (e: MouseEvent<HTMLDivElement>) => void}) {
  
  return (
    <div className={className}>
      <NewInputLink className=""/>
      <MBTILists onClick={onClick}/>
    </div>
  )
};

const MBTIPart = styled(CompMBTIPart)`
  width: 528px;
`;

export default MBTIPart;