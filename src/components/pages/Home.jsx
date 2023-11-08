import React from "react";
import image from "../../assets/download.jpg";
import banner2 from "../../assets/banner2.jpg";
import Shop from "./Shop";
const Home = () => {
  return (
    <div className="  ">
      {/* banner  */}

      <img src={banner2} className="w-full h-[400px] object-cover" alt="" />

      {/* shop  */}
      <Shop />
    </div>
  );
};

export default Home;
