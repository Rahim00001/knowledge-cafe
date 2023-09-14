import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/header'

function App() {
  const [bookMarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    console.log('book mark added');
  }
  return (
    <div className='max-w-6xl mx-auto'>
      <Header></Header>
      <div className='md:flex gap-5 mx-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
