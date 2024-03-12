import React, { useEffect } from "react";

const ContainerDiv = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="w-11/12 mx-auto"> {children}</div>;
};

export default ContainerDiv;
