import MBTIList, { Survey } from "./MBTIList";
import { getSurveys } from "../api/api";
import { MouseEvent, useEffect, useState } from "react";
import React from 'react';

const initProp = {
  colorCode: "",
  createdAt: 0,
  updatedAt: 0,
  id: 0,
  mbti: "",
}

// const handleClick = (e: MouseEvent<HTMLDivElement>) => {
//   const target = e.currentTarget as HTMLDivElement;
//   const textValue = target.innerText;
//   setSelectMBTI(textValue);
// };

function MBTILists ({ onClick }: {onClick: (e: MouseEvent<HTMLDivElement>) => void}) {
  const [surveys, setSurveys] = useState<Survey[]>([initProp]);

  const handleLoad: () => void = async () => {
    const result = await getSurveys();
    setSurveys(result);
  }

  useEffect(() => {
    handleLoad();
  }, [])

  return (
    <MBTIList className="" surveys={surveys} onClick={onClick}/>
  )
};

export default MBTILists;