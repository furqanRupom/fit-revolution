import Image from "next/image";
import bg from "../assets/gym.png";

const Hero = () => {
  return (
    <div className="h-screen" style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100vh',
      backgroundSize:'cover'
    }}>
       <h3>

       </h3>

    </div>
  );
};

export default Hero;



