import React, { useState } from "react";
import * as Views from "./views";
import Button from "@material-ui/core/Button";

const App = () => {
  const [visibleView, setVisibleView] = useState("InitialView");
  const VisibleView = Views[visibleView];

  const handleOnClick = (evt) => {
    setVisibleView(evt.currentTarget.value);
  };
  return (
    <div className={"appContainer"}>
      <nav>
        <Button
          onClick={handleOnClick}
          variant="contained"
          color="primary"
          value={"InitialView"}
        >
          Initial view
        </Button>
        <Button
          onClick={handleOnClick}
          variant="contained"
          color="primary"
          value={"CustomView"}
        >
          Custom view
        </Button>
      </nav>
      <VisibleView />
    </div>
  );
};

export default App;
