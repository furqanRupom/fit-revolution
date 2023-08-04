import Image from "next/image";
import bg from "../assets/gym.png";
import logo from '../assets/body-building.png'

const Hero = () => {
  return (
    <section className="h-screen relative pt-14" style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100vh',
      backgroundSize:'cover'
    }}>

      {/* add image and other things for banner section  */}


      <div className="pt-12 ml-12 ">
        <div>
      <Image className="pl-5" ref={null} src={logo} alt="body-builder" />
      <h3 className=" pl-5 text-md font-semibold text-white ">Fitness <br />revolution</h3>

      <h1 className="text-5xl lg:text-7xl pt-8  md:pt-40 pb-8  font-bold text-white">
        Start your
      </h1>
      <h1 className="text-5xl lg:text-7xl -mt-4 text-rose-900">
        training today
      </h1>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <button className="px-12 pr-32 text-xl  py-3 bg-rose-500 text-white rounded-tl-full rounded-bl-full">Join Now</button>
      </div>

    </section>
  );
};

export default Hero;



