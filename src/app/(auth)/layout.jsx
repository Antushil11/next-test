import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-2">{children}</div>
      <div className="flex-1 bg-sky-200  text-black flex justify-center items-center text-4xl  font-bold rounded-xl">
        <h2>Welcome to the Page</h2>
      </div>
    </div>
  );
};

export default layout;
