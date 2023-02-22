import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div class="alert alert-primary" role="alert">
        This is an Alert Message {props.message}
      </div>
    </div>
  );
};

export default Alert;
