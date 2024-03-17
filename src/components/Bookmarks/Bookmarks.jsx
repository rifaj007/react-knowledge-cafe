import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, addTime}) => {

   return (
      <div className="w-1/3 ">

      <div className="py-5 px-11 bg-[#6047EC1A] rounded-lg border border-[#6047EC] mb-6">
         <h2 className="text-2xl font-bold text-[#6047EC]">Spent time on read : {addTime}</h2>
      </div>

        <div className="bg-[#1111111A] rounded-lg p-[30px]">
            <h2 className="text-2xl font-bold mb-4">Bookmarked Blogs : {bookmarks.length}</h2>

            {
               bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
         </div>
      </div>
   );
};

Bookmarks.propTypes ={
   bookmarks: PropTypes.array,
   addTime: PropTypes.number,
}

export default Bookmarks;