import React from "react";

const Alert = (props) => {
  return (
<<<<<<< HEAD
    <div>
      <div class="alert alert-primary" role="alert">
        This is an Alert Message {props.message}
      </div>
=======
    <div style={{height: '35px', fontSize: 12}}>
    {/* means props.message should not be in null state*/}
    { props.message && (
      <div
        className={`alert alert-${props.message.type} alert-dismissible fade show`}
        role="alert"
      >
        {props.message.type === 'success' ? 'Success' : ''}
        <strong>{props.message.message}</strong>
      </div>
    )}
>>>>>>> 0719ca2 (Added to git)
    </div>
  );
};

export default Alert;
