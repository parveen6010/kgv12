import React from "react";
import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { Button2 } from "../components/Button2";
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";
import bikeleft from "../resource/bike_left.jpeg";
import bikeright from "../resource/bike_right.jpeg";
import biketop from "../resource/bike_top.jpeg";
import news from "../resource/news_clipping.jpeg";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import bike5 from '../resource/bike_main.png';
import heroImg from '../resource/homehero.png'
export const Home = () => {
  return (
    <div className="w-screen  overflow-hidden  min-[320px]:w-full ">
      {/* Hero section */}
      {/* <div className="hero min-[320px]:w-full min-[320px]:scale-[0.25] sm:scale-[1]  flex flex-col sm:h-screen justify-center items-center" >
      <h1 className="text-4xl font-extrabold absolute top-32 font-serif text-center z-10 min-[320px]:text-4xl min-[320px]:top-5" style={{ fontFamily: 'Anybody' }}>Welcome to the world of smart E-MOBILITY solution{" "}</h1>
         <img
          src={bike5}
          className="z-40  lg:postion-relative lg:left-[270px] hover:lg:scale-[1.2] md:pt-[50px] md:pl-[14%]  md:scale-[0.8] md:left-[-0.1%] bikeimg absolute top-[4%] left-[20%] scale-75 hover:scale-100 transition-all duration-500 min-[320px]:[5%]    "
        />
         <div className=" h-full w-full  flex flex-col justify-center items-center sm:absolute sm:scale-[0.47] md:absolute md:scale-[0.55] lg:absolute lg:scale-[1]">
            <h1 className="relative top-[400px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Sustainable</h1>
           <h1 className="relative top-[150px] uppercase font-extrabold  scale-75  text-[20rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Energy</h1>
           <h1 className=" relative top-[-150px]  uppercase  font-extrabold text-transparent  text-[15rem]  z-20" style={{textShadow: "0px 3px 0px #55ff17db, 0px 14px 10px green, 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)", WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "3px",
            WebkitTextStrokeColor: "green",
            }} >INNOVATE</h1>
           <h1 className=" relative top-[-300px]  uppercase  font-extrabold   text-[10rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>TRANSFERABILITY</h1>
           <h1 className="relative top-[-450px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Affordable</h1>
         </div>
      </div> */}
       <div className="w-screen h-full flex flex-col items-center justify-center">
        <img
          src={heroImg}
          className="w-screen h-screen"
          loading="lazy"
        />
        <img src={bike5} className="absolute"/>
      </div>
      {/* About Us */}
      <div className="about-us w-screen  flex flex-col mb-10 justify-center relative items-center   z-10 ">
         <img src={wave} className="w-full absolute h-full top-0 -z-10" />
         <div className="flex flex-col  justify-center rounded-lg h-[60%]  p-4 w-full  items-center  gap-y-5 min-[320px]:max-w-[70%] md:max-w-[70%] lg:max-w-[50%] lg:p-10 bg-black bg-opacity-10">
           <div className="text-4xl font-bold text-center">About us </div>
           <div className="w-full text-center  sm:text-2xl min-[320px]:text-lg min-[320px]:leading-6">
             KGV is a smart e-mobility solution provider that aims to cater to
             the society as it reduces the immense burden on the middle and lower
             segment of the community by reducing the cost of commuting by more
             than 90%.{" "}
           </div>
           <div className="flex  justify-center items-center gap-2">
             <Book />
             <Button2 />
           </div>
         </div>
       </div>      
       {/* Key benefits sections */}
       <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full   bg-[#56e422c4]  relative z-10 p-5 md:h-100 ">
       <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center  md:text-center md:text-2xl min-[320px]:font-bold min-[320px]:text-5xl">
           Key Benefits
         </div>
         <div className=" flex flex-col justify-start h-[80%] pb-5 mx-auto max-w-[1204px] w-11/12 md:flex-wrap md:flex-row md:grid md:grid-cols-2 gap-10 ">
           {keyBenefits.map((benefits, index) => {
             return <BenefitCard key={index} passed={benefits} />;
           })}
         </div>
        </div> 
        {/* Vision and mission */}
      <div className="max-w-[1204px]  mx-auto flex pt-7 pb-14  gap-3 text-l  flex-col   items-center">
         <div className="flex flex-col  rounded-lg h-[70%]  p-4 w-[90%] min-w-[300px]   gap-y-5 text-center   bg-black bg-opacity-10 py-10">
           <div className="text-2xl font-bold uppercase mt-2 text-center"> Vision </div>
       
           <div>
             {" "}
             We started from the bike and we’ll make its delivery shortly to  all the commuters worldwide.
           </div>
           <div>
             Our team of engineering excellence is also working on bringing up
             the system to each and every mode of transportation including <span className="font-semibold">3-wheelers, cars, LMVs, LCVs, and even HCVs.</span>
           </div>
         </div>
         <div className="flex flex-col  justify-start rounded-lg h-[70%] p-4 w-[90%] min-w-[300px]   gap-y-5 text-center  bg-black bg-opacity-10 py-10  ">
           <div className="text-2xl font-bold uppercase mt-5 text-center"> Mission </div>
           <div>
             To empower every common man in the world to save his/her hard earned
             moneyspent on fossil fuels
           </div>
           <div>
             To save mother Earth from air and noise pollutionas well as a green
             and cleaner environment for saving life and humanity
           </div>
           <div>
             To ensure trouble free and tension free drive to each and every
             rider reducing the anxiety of being stuckanywhere in the middle of
             his/her journey
           </div>
           <div>
             To reduce the traveling cost of companies, corporate and enterprizes
             by more than 90% and add to their profits
           </div>
           <div>
             Our plug-in hybrid was designed to get to the battery fit our and
             can be charged inside the home
           </div>
         </div>
       </div>
       {/* photo gallery */}
       <div className="w-full lg:h-screen  bg-black relative z-10 pb-7 ">
         <img src={goldenwave} className="w-full h-full scale-110  absolute -z-10  min-[320px]:h-screen" loading="lazy"/>
         <div className="flex flex-col justify-evenly gap-12 max-w-[1204px] mx-auto pt-8 h-full  ">
           <div className="text-yellow-500 text-5xl  font-extrabold text-center min-[320px]:text-3xl">
             {" "}
             #KGVPhotoWall{" "}
           </div>
           <div className="w-full h-full flex justify-evenly items-center gap-10 min-[320px]:flex-col sm:flex-row px-5">
           <div className="w-[85%] h-1/3  rounded-md opacity-90">
             <img src={bikeleft} className=" w-full  mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80" loading="lazy"/>
           </div>
           <div className="  w-[85%] h-1/3  rounded-md opacity-90">
             <img src={bikeright} className=" w-full   mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80" loading="lazy"/>
           </div>
           <div className="w-[85%] h-1/3  rounded-md opacity-90">
             <img src={biketop} className=" w-full  mt-1  rounded-md  hover:scale-110 transition-all duration-500 min-[320px]:h-80" loading="lazy"/>
           </div>
           </div>
         </div>
       </div>
       {/* recent achievement section  */}
       <div className="w-11/12 max-w-[1204px] mx-auto   pt-11 pb-16 flex flex-col justify-center items-center ">
        <div className="uppercase text-3xl font-semibold pb-5 min-[320px]:text-lg min-[320px]:text-center sm:text-2xl md:text-3xl">
          {" "}
          Our Recent achievements...
        </div>
        <Link
          className="flex justify-center items-center hover:scale-110 transition-all duration-500 "
          to={
            "https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"
          }
        >
          <img src={news} className="w-[70%]  border-black border-2 rounded-md" loading="lazy"/>
        </Link>
      </div>
      <div></div>
      <BusinessBook />

    </div>
  )
}