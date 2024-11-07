import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="bg-gradient-to-r from-white to-blue-300  text-center text-blue-800 p-10">
    <div className="m-24 " >
    <Image 
      src="/compulet.png"
      alt="Description of image" 
      width={500} 
      height={300} 
      className="rounded-full mx-auto shadow-black shadow-2xl"
    />
      
      <h1 className="text-4xl mt-4 cursor-pointer font-semibold">Aslom o Alikom</h1>
  
      <h1 className="text-2xl mt-2 cursor-pointer" >
        I am <span className="font-semibold">Rimsha Kanwal Arian</span> FULL STACK Developer
      </h1>
  
      <p className="text-lg mt-4 max-w-xl mx-auto cursor-pointer">
        I am a full stack developer specializing in creating the visual and interactive aspects of websites and web applications. I use technologies like HTML, CSS, TypeScript, and Next.js to build user interfaces that are both functional and aesthetically pleasing. I ensure a seamless user experience by optimizing performance and ensuring cross-browser compatibility.
      </p>
  
      <div className="mt-10 ">
        <div className="inline-block cursor-pointer">
        <Image 
            src="/image.png" 
            alt="Description of image" 
            width={500} 
            height={300} 
            className="rounded-full mx-auto animate-pulse"
          />
          
          <h3 className="text-xl mt-4">
            FULL STACK <span className="font-semibold">Developer</span>
          </h3>
          <p className="text-lg mt-2 max-w-sm mx-auto">
            I am Rimsha Kanwal Arian, a 23-year-old full stack developer. I have acquired skills in full stack development and studied on-site at Governor House. I am grateful to Governor Kamran Tessori for initiating my IT education.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Home;
