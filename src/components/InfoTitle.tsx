import styled from "styled-components";
import deleteIcon from "../assets/images/x.svg";
import React, { MouseEvent } from 'react';

function CompInfoTitle ({className = "", selectMBTI = "", onDelete}: {className: string, selectMBTI: string, onDelete: (e: MouseEvent<HTMLDivElement>) => void }) {

  const HandleDelete = (e: MouseEvent<HTMLDivElement>) => {
    onDelete(e);
  };

  const SelectedMBTI = styled.div`
    text-align: right;
    padding: 2px 0 2px 110px;
    marin-top: 5px;
    height: 50px;
    div {
      border-radius: 8px;
      height: 100%;
      line-heigh: 100%;
      background-color: white;
      display: inline-flex;
      font-size: 20px;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      gap: 5px;
      img {
        width: 10px;
      }
    }
  `;
  
  return (
    <div className={className}>
      <div>
        <h1>
          MBTI별
          <br/>
          <span>좋아하는 색</span>
          {
          selectMBTI 
          && 
          (<SelectedMBTI>
            <div>
              {selectMBTI}
              <img src={deleteIcon} alt="delete-icon" onClick={HandleDelete}/>
            </div>
          </SelectedMBTI>)}
        </h1>
      </div>
    </div>)
};

const InfoTitle = styled(CompInfoTitle)`
  width: 297px;
  color: #464E5E;
  text-align: right;
  &>div {
    border-radius: 80px;
    background-color: #F5F7FB;
    height: 288px;
    padding: 80px 40px;
    h1 {
      margin-bottom: 32px;
      font-size: 40px;  
      font-weight: 400;
      line-height: 48px;
      span {
        font-weight: 800;
      }
    }
  }
`;

export default InfoTitle;