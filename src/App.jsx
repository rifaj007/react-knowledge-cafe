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

   const handleAddTime = (time, Id) => {
      setAddTime(addTime + time)

      // remove the read blog from bookmark
      console.log('remove bookmark', Id);
      const reamainingBookmarks = bookmarks.filter(bookmark => bookmark.Id !== Id);
      setBookmarks(reamainingBookmarks)
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
