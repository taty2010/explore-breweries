import React, { useState } from "react";

const Sort = (props) => {
  console.log(props.name);

  return (
    <div>
      <p>{props.sorts}</p>
    </div>
  );
};

export default Sort;
