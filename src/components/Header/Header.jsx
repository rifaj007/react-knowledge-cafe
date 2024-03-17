import profile from '../../assets/images/profile.png'
const Header = () => {
   return (
      <div className='flex justify-between items-center border-b-2 border-[#11111126] pt-12 pb-8'>
         <h1 className='text-[40px] font-bold'>Knowledge Cafe</h1>
         <img src={profile} alt="" />
      </div>
   );
};

export default Header;
