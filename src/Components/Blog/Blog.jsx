import React from "react";
import { CiBookmark } from "react-icons/ci";
import { Flip, ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";
const Blog = ({ blog, handleAddBookmark, handleBookAsRead }) => {
  //   console.log(blog);
  const {
    id,
    cover,
    title,
    author,
    author_img,
    hashtags,
    posted_date,
    reading_time,
  } = blog;
  return (
    <div className="mb-10">
      {/* cover */}
      <div>
        <img className="cover rounded-lg" src={cover} alt="" />
      </div>
      {/* author line */}
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center">
          <img className="w-12 mr-6" src={author_img} alt="" />
          <div>
            <h2 className="text-xl font-bold">{author}</h2>
            <p className="text-gray-500 text-xs">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p>{reading_time} min read</p>
          <button
            onClick={() => handleAddBookmark(blog)}
            className="text-3xl font-bold ml-2 text-red-700"
          >
            <CiBookmark></CiBookmark>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-4 mb-4">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span className="mr-2 text-gray-500" key={idx}>
            #{hash}
          </span>
        ))}
      </p>
      <button
        onClick={() => handleBookAsRead(id, reading_time)}
        className={`text-purple-800 font-bold underline`}
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
