import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
import { toast } from "react-toastify";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  // console.log(bookmarks);
  const [markAsReadTime, setMarkAsReadTime] = useState(0);

  const handleBookAsRead = (id, time) => {
    setMarkAsReadTime(markAsReadTime + time);
  };

  const handleAddBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    const isExist = bookmarks.find((item) => item.id == blog.id);
    if (!isExist) {
      setBookmarks(newBookmark);
    } else {
      toast("Already bookmarked!!");
    }
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
