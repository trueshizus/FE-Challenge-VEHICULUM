import React from "react";
import useFirebaseDocument from "../../firebase/useFirebaseDocument";

function Tag(props) {
  const [tag, isLoading] = useFirebaseDocument("categories", props.id);
  return (
    !isLoading &&
    <span class="tag typography typography--tag bullet-small-rigth">
      {" "}{tag.label}
    </span>
  );
}

export default Tag;
