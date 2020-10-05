import React from "react";

const Toolbar = (props) => {
  const { type, disablePast } = props;
  console.log(props);

  return <div>{type}</div>;
};

export default Toolbar;
