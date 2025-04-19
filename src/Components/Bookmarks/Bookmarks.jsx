import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, markAsReadTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="border rounded-xl border-purple-600 mb-12 bg-[#5845d408]">
        <h2 className="text-2xl font-bold text-center text-[#6047EC]  p-4">
          <span className="mr-2">Spent time on read:</span>
          {markAsReadTime} min
        </h2>
      </div>
      <h2 className="text-center text-3xl font-bold">
        Bookmarked blog: {bookmarks.length}
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </h2>
    </div>
  );
};

export default Bookmarks;
