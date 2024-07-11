import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from 'react';

function ComNewInputLink ({className = ""}: {className: string}) {
  const navigate = useNavigate();
  const handleClick: () => void = () => {
    navigate("/new");
  }
  return (
      <div className={className} onClick={handleClick}>
        <span>+</span><span>새컬러 등록하기</span>
      </div>
  )
};

const NewInputLink = styled(ComNewInputLink)`
  height: 78px;
  padding: 24px 48px;
  font-size: 24px;
  border: 2px rgb(222, 227, 236) dashed;
  border-radius: 8px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    background-color: #DEE3EC;
  }
`;

export default NewInputLink;