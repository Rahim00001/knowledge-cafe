import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2 my-5 border-2 rounded-full border-black'>
            <h1 className="text-4xl text-yellow-300  font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;