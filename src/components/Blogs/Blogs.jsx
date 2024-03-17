import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMark, handleAddTime}) => {
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
   },[])

   return (
      <div className="w-2/3">
         {
            blogs.map(blog => <Blog key={blog.Id} blog={blog} handleAddToBookMark={handleAddToBookMark} handleAddTime={handleAddTime}></Blog>)
         }
      </div>
   );
};

Blogs.propTypes = {
   handleAddToBookMark: PropTypes.func,
   handleAddTime: PropTypes.func
}

export default Blogs;