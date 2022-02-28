import React from "react";
import DetailView from "./detailView";

export default function DetailViewParent(props) {
  return <DetailView detail={props?.location?.state?.details} />;
}
