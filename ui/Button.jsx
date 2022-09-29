import React, { useState } from "react";

function Button() {
  const [buttonClicked, setButtonClicked] = useState("");
  return (
    <button
      onClick={() => setButtonClicked("You Clicked me!")}
      type="button"
      className="btn btn-primary"
    >
      {buttonClicked || "Click me"}
    </button>
  );
}

export default Button;
