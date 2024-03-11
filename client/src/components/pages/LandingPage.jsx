import React from "react";
// import banner from "../../assets/banner4.jpg";
import banner from "../../../public/360_F_101827223_m5F7hZKTb2hLljk0TwQEfGbl79FQcmRF.jpg";
import hero from "../../assets/DMS-6.webp";
import { Link } from "react-router-dom";
import { BiLogoDeezer } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa6";
import ContainerDiv from "../website/containerDiv/containerDiv";
import {
  FaCloudversify,
  FaFile,
  FaFolder,
  FaShare,
  FaSpeakerDeck,
  FaStumbleupon,
  FaSubway,
  FaUser,
} from "react-icons/fa";
import Header from "../website/Header";
import Hero from "../website/Hero";
import Features from "../website/Features";

const LandingPage = () => {
  return (
    <div>
      {/* <=====================Hero=====================> */}
      <Hero />
      {/* <=====================features=====================> */}
      <Features />
    </div>
  );
};

export default LandingPage;
