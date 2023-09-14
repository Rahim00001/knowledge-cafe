/* eslint-disable react/prop-types */
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmark }) => {
    console.log(blog);
    const { id, cover, author, author_img, title, posted_date, hashtags, reading_time } = blog
    return (
        <div className="mb-16">
            <img className="mb-2" src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between mb-2">
                <div className="flex gap-2">
                    <img className="w-10" src={author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <h1>{posted_date}</h1>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    {/* <span>{reading_time} min read</span> */}
                    <h1>{`${reading_time} min read`}</h1>
                    <button onClick={handleAddToBookmark}
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className="text-3xl font-bold">Title: {title}</h1>
            <div>
                {
                    hashtags.map((tag, idx) => <span key={idx}><a href="">#{tag} </a></span>)
                }
            </div>
        </div>
    );
};

export default Blog;