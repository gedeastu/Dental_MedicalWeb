import React from "react";
import Header from "../../layouts/Home/Header";
import Services from "../../layouts/Home/Services";
import NumberInput from "../../layouts/Home/numberPhone";
import Advantage from "../../layouts/Home/Advantage";
import Quality from "../../layouts/Home/Quality";
import Playlist from "../../layouts/Home/Playlist";
import OurSpecialist from "../../layouts/Home/OurSpecialist";
const Home = () => {
  return (
    <>
      <div className="w-[90%] md:w-[100rem] bg-white m-auto text-black">
        <Header/>
        <Services/>
        <NumberInput/>
        <Advantage/>
        <Quality/>
        <Playlist/>
        <OurSpecialist/>
        {/* <div className="bg-[#E6F6FE]"><Navigation/></div> */}
      </div>
    </>
  );
};

export default Home;
