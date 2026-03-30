import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h2 className="text-5xl rounded-2xl p-4 mt-4 font-bold bg-blue-400 text-black py-6">
        {children}
      </h2>
    </div>
  );
};

export default Title;
