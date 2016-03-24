import React from "react";

export default ({onSearch}) => {

  let input = null;
  let handleClick = () => { onSearch(input.value); };
  return (
    <div>
      <input type="text" ref={ (i) => {
        input = i;
      } } />
      <input type="button" value="Search" onClick={handleClick} />
    </div>
  );
};
