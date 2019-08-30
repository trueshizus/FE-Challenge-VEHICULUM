import React from "react";
import useFirebaseDocument from "../../firebase/useFirebaseDocument";

function Tag(props) {
  const [tag, isLoading] = useFirebaseDocument("categories", props.id);
  const pillColor = ({ color }) => ({ backgroundColor: color });
  return (
    !isLoading &&
    <span
      class="tag typography typography--tag bullet-small-rigth"
      style={pillColor(tag)}
    >
      {" "}{tag.label}
    </span>
  );
}

export default Tag;
