import React from "react";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-slate-200 p-4 m-4 rounded-lg">
      <h2 className="text-2xl">{bookmark.title}</h2>
    </div>
  );
};

export default Bookmark;
