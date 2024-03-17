import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

   const [bookmarks, setBookmarks] = useState([]);
   const [addTime, setAddTime] = useState(0);

   const handleAddToBookMark = blog => {
      const newBookmarks = [... bookmarks, blog];
      setBookmarks(newBookmarks);
   }

   const handleAddTime = time => {
      setAddTime(addTime + time)
   }

  return (
    <>
      <Header></Header>

      <div className='md:flex mt-8 gap-6'>
      <Blogs handleAddToBookMark={handleAddToBookMark} handleAddTime={handleAddTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} addTime={addTime}></Bookmarks>
      </div>
    </>
  )
}


export default App
