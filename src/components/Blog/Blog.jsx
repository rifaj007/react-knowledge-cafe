import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog , handleAddToBookMark, handleAddTime}) => {

   const {Id, title, cover, author, author_img, posted_date, reading_time, hashtag} = blog;
   return (
      <div className='border-b border-[#1111111A] last:border-none pb-8 mb-10'>
         <img className='rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
         
         <div className='flex justify-between mt-8 mb-4 items-center'>
            <div className='flex'>
               <div className='w-[60px] h-[60px] mr-6'>
               <img src={author_img} alt="" />
               </div>

               <div>
                  <h4 className='text-[#111111] font-bold text-2xl'>{author}</h4>
                  <span className='text-[#11111199] text-base font-semibold'>{posted_date}</span>
               </div>
            </div>
            <div className='flex items-center gap-2'>
               <span className='text-xl font-medium text-[#11111199]'>{reading_time} min read</span>
               <button onClick={() => handleAddToBookMark(blog)}><CiBookmark /></button>
            </div>
         </div>

         <div className=''>
            <h1 className='text-[#111111] font-bold text-[40px]'>{title}</h1>

            <p className='text-[#11111199] font-medium text-xl flex gap-4 mb-4'>
            {
               hashtag.map(hash => {<span><a href="">#{hash}</a></span>})
            }
            </p>
            <button onClick={() => handleAddTime(reading_time, Id)} className='text-[#6047EC] text-xl font-semibold underline underline-offset-1'>Mark as read</button>
         </div>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
   handleAddToBookMark: PropTypes.func,
   handleAddTime: PropTypes.func,
}
export default Blog;