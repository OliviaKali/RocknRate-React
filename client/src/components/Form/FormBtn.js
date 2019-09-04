import React from "react";

export function FormBtn(props) {
  return (
    // <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
    <button {...props} style={{ textAlign: "center", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}