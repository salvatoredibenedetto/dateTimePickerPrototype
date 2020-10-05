import React, { useState } from "react";
import * as Views from "./views";
import Button from "@material-ui/core/Button";

const App = () => {
  const [visibleView, setVisibleView] = useState("CustomView");
  const VisibleView = Views[visibleView];

  const handleOnClick = (evt) => {
    setVisibleView(evt.currentTarget.value);
  };
  return (
    <div className={"appContainer"}>
      <nav className={"nav-buttons"}>
        <Button
          onClick={handleOnClick}
          variant="contained"
          color="primary"
          value={"InitialView"}
          className={"view-selector"}
        >
          Initial view
        </Button>
        <Button
          onClick={handleOnClick}
          variant="contained"
          color="primary"
          value={"CustomView"}
          className={"view-selector"}
        >
          Custom view
        </Button>
      </nav>
      <VisibleView />
    </div>
  );
};

export default App;
