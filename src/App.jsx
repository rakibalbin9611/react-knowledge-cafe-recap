import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  // console.log(bookmarks);
  const [markAsReadTime, setMarkAsReadTime] = useState(0);

  const handleBookAsRead = (time) => {
    setMarkAsReadTime(markAsReadTime + time);
  };

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-6xl mx-auto mt-8 md:p-4 p-6">
        <Blogs
          handleBookAsRead={handleBookAsRead}
          handleAddBookmark={handleAddBookmark}
        ></Blogs>
        <Bookmarks
          markAsReadTime={markAsReadTime}
          bookmarks={bookmarks}
        ></Bookmarks>
      </main>
    </>
  );
}

export default App;
