import Image from "next/image";
import bg from "../assets/cover.png";
const Hero = () => {
  return (
    <div>
      <Image
        className="md:object-center  object-cover pointer-events-none"
        src={bg}
        alt="logo"
        style={{
          width: "100%", // Set the width to 100% using CSS
        }}
      />
    </div>
  );
};

export default Hero;
