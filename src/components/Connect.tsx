import React from 'react';
import {FaFacebookF,FaInstagram,FaTwitter,FaDribbble} from "react-icons/fa"
const Connect = () => {
    return (
        <div className="mt-48 mb-16 max-w-7xl mx-auto">
                <h3 className="uppercase text-6xl font-thin  text-center tracking-wide">Connect</h3>
                <p className="text-center py-7 max-w-[700px] mx-auto text-sm text-gray-600 leading-relaxed">Join us on social media to stay in the loop and continue the conversation. Follow us for daily inspiration, thought-provoking discussions, and behind-the-scenes glimpses into our vibrant community. Let's connect and keep the engagement going!</p>


                <div className="flex space-x-3 max-w-[22rem] justify-center mt-4  mx-auto text-center">
                    <div className="text-lg p-2 w-fit bg-black text-white shadow">
                        <FaFacebookF />
                    </div>

                    <div className="text-lg p-2 w-fit bg-black text-white shadow">
                        <FaInstagram />
                    </div >

                    <div className="text-lg p-2 w-fit bg-black text-white shadow">
                        <FaTwitter />
                    </div>

                    <div className="text-lg p-2 w-fit bg-black text-white shadow">
                        <FaDribbble />
                    </div>
                </div>
        </div>
    );
};

export default Connect;