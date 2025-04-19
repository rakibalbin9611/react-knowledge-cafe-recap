import React from "react";
import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4 border-b-2">
      <h2 className="text-4xl font-bold">Knowledge cafe</h2>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
