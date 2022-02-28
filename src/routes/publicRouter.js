import React from "react";

function PublicRoute(props) {
  const { component: Component, pageType, type } = props;

  return (
    <React.Fragment>
      <Component {...props} pageType={pageType} type={type} />
    </React.Fragment>
  );
}

export default PublicRoute;
