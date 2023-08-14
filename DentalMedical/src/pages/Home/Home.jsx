import React from "react";
import Header from "../../layouts/Home/Header";
import Services from "../../layouts/Home/Services";
import NumberInput from "../../layouts/Home/numberPhone";
import Navigation from "../../components/swiperNavigation/Navigate";
const Home = () => {
  return (
    <>
      <div className="w-[90%] md:w-[100rem] bg-white m-auto text-black">
        <Header/>
        <Services/>
        <NumberInput/>
        {/* <div className="bg-[#E6F6FE]"><Navigation/></div> */}
      </div>
    </>
  );
};

export default Home;
