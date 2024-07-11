import InputTitle from "../components/InputTitle";
import MBTISelectors from "../components/MBTISelectors";
import ColorView from "../components/ColorView";
import ColorInputBtn from "../components/ColorInputBtn";
import React from 'react';

function NewInputPage () {
  return (
    <div>
      <InputTitle />
      <MBTISelectors />
      <ColorView />
      <ColorInputBtn />
    </div>
  )
};

export default NewInputPage;