import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
   const {title} = bookmark;
   return (
       
      <div className="flex flex-col gap-4">
         <div className="bg-white rounded-lg p-5 mb-4">
            <h2 className="text-[#111111] font-semibold text-lg">{title}</h2>
         </div>
      </div>
   );
};

Bookmark.propTypes = {
   bookmark: PropTypes.object,
}
export default Bookmark;
