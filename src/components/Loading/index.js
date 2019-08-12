import React from "react";

function Loading(props) {
  return (
    <div class="no-data typography typography__center typography__semi-bold">
      {props.children}
    </div>
  );
}

export default Loading;
