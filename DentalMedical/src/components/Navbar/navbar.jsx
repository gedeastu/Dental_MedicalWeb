import React, { useReducer } from 'react';
import { useState,useEffect } from 'react';
import profile from '../../assets/profile.jpg';
import { PaginationGetPosts } from '../../services/paginationAPI';
import TopDrawer from '../topDrawer/TopDrawer';
import { NavLink } from 'react-router-dom';
import Dropdown from '../dropdown/dropdown';
import './navbar.css'
// State Initial || Value Default
// const initialActiveLink = {
//   activeLink: 1,
// }
const initialDropdown = {
  stateDropdown: false,
}


// function reducer(state,action){
//   switch(action.type){
//     case "ActiveLink":
//       return{
//         ...state,
//         activeLink: action.payload
//       }
//   }
// } 
function reducer(state,action){
  switch (action.type){
    case 'activeDropdown':
      return{
        ...state,
        // stateDropdown: action.payload
        stateDropdown: !state.stateDropdown
      };
      default:
        return state;
  }
}
const Navbar = () => {
  //Reducer Hook State
  // const [{activeLink},dispatchActive] = useReducer(
  //   reducer,initialActiveLink
  // )
  const [{stateDropdown},dispatch]= useReducer(
    reducer,initialDropdown
  )

  //Fetching Data Pagination
  const [dataPagination,setDataPagination]= useState([]);
  const fetchData = async () =>{
    try{
      const data = await PaginationGetPosts();
      setDataPagination(data);
      // console.log(data);
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);

  // HOOK Active Link
  // const [activeLink, setActiveLink] = useState(1);
  // const handleLinkClick = (link)=>{
  //   setActiveLink(link);
  // }


  return (
    <>
    <nav className='flex flex-row justify-between h-max mt-8 mb-20 items-center md:bg-[#E6F6FE] md:rounded-[0.63rem] md:mb-20 md:px-8 md:py-5'>
      <div id='logo' className='flex flex-row items-center gap-2'>
      <svg className='w-10' viewBox="0 0 155 177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M153.548 33.274C149.742 17.6413 137.262 4.90556 121.74 0.87466C110.611 -2.01542 99.9603 2.63775 90.9236 9.28562C89.8001 10.1118 88.5175 10.5751 87.2938 11.1801L97.0841 17.4753C99.6492 19.1243 100.396 22.5468 98.7435 25.1188C97.2016 27.5215 93.8103 28.5275 91.0999 26.7782L56.3533 4.43886C49.1973 0.687981 41.3567 -1.23067 33.2569 0.87466C17.7348 4.90902 5.25495 17.6413 1.44876 33.274C-2.05321 47.6621 1.30356 61.2102 8.88138 71.45C16.957 82.3638 20.179 95.1859 21.4269 108.561C22.948 124.865 24.9981 141.113 28.666 157.07L31.3625 168.807C32.4652 173.602 36.7174 177 41.6195 177C46.4489 177 50.6596 173.699 51.8315 168.994L63.7479 121.141C65.3243 114.808 70.9939 110.369 77.4931 110.369C83.9923 110.369 89.6618 114.811 91.2382 121.141L103.155 168.994C104.327 173.699 108.537 177 113.367 177C118.269 177 122.521 173.602 123.624 168.807L126.32 157.07C129.988 141.116 132.035 124.865 133.559 108.561C134.807 95.1825 138.029 82.3638 146.105 71.45C153.693 61.2137 157.05 47.6656 153.548 33.274Z" fill="black"/>
      </svg>
      <h1 className='font-generalSans font-semibold text-2xl'>Dental</h1>
      </div>
      <TopDrawer/>
      <div id='panigator' className=' hidden md:flex md:flex-row md:justify-center md:mx-auto md:gap-10'>
        {/* {dataPagination.map((data)=>(
        <div key={data.id}>
          <NavLink to={data.to} onClick={()=> dispatch({type: "ActiveLink", payload:(data.id)})} className={`transition-all font-generalSans text-lg duration-200 hover:font-semibold ${activeLink === (data.id)? ('border-b-2 border-black font-semibold transition-all'):('font-medium')}`}>{data.desc}</NavLink>
        </div>
        ))} */}
        {dataPagination.map((data)=>(
          <div key={data.id}>
            <NavLink to={data.to} className={``}>{data.desc}</NavLink>
          </div>
        ))}
      </div>
        {/* <Link to='/home'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/services'>Blogs</Link>
        <Link to='/services'>About</Link>
        <Link to='/services'>Contact</Link> */}
      <div id="profileAndBook" className='hidden md:flex md:relative md:flex-row md:gap-6'>
        <div className='relative flex flex-col items-center'>
        <button onClick={()=>dispatch({type:'activeDropdown'})} className='w-[60px] h-[60px] relative cursor-pointer'>
        <img src={profile} alt="" className='w-full h-full object-cover rounded-full transition-all' />
        <div id='ping' className='absolute cursor-default right-1 top-0 h-3 flex flex-row justify-center items-center w-3 p-0.5 rounded-full'>
          <div className='bg-[#42cd50] animate-ping absolute h-full w-full rounded-full'></div>
          <div className='bg-[#17BF28] absolute h-3 w-3 rounded-full border border-[#E6F6FE]'></div>
        </div>
        </button>
        {stateDropdown ? (
          <Dropdown styles={`bg-[#4ad2ff] border border-white/20 transition-all duration-300 absolute right-0 z-20 top-16 w-44 rounded-xl shadow-lg h-52 opacity-100 after:w-10 after:h-10  after:relative  after:z-20 after:-top-20`}>

          </Dropdown>
        ) : (
        <Dropdown styles={`bg-[#4ad2ff] border border-white/20 absolute transition-all duration-300 right-0 -z-50 top-16 w-44 rounded-xl shadow-lg h-0 opacity-0 after:w-10 after:h-10  after:relative  after:z-20 after:-top-20`}>

        </Dropdown>
        )}
        </div>
        <button className='bg-[#1376F8] font-generalSans w-36 font-semibold text-white rounded-xl'>Book Now</button>
      </div>
    </nav>
    </>
  )
}

export default Navbar;