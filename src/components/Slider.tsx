import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Slider:React.FC = () => {
  return (
    <div className='mt-32'>
         <Marquee >
         <div className='mr-10 group relative'>
          <Image
            className='rounded-lg group-hover:blur-sm  cursor-pointer'
            src='https://images.pexels.com/photos/6551136/pexels-photo-6551136.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='sliderimg'
            width={300}
            height={300}
          />
          <div className='overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100   transition duration-300'>
            {/* Social links */}
            <div className='flex space-x-4 text-2xl text-rose-500'>
              <div className='bg-slate-900/50 p-3 rounded-full'>

              <FaFacebook />
              </div>
              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaTwitter />
              </div >

              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaInstagram />
              </div>

            </div>
          </div>
          <h3 className='py-3 text-center text-2xl font-extrabold uppercase'>
            Benjamin Ethan
          </h3>
          <p className='text-xl font-bold text-rose-500 text-center'>
            Personal Trainer
          </p>
        </div>

          <div className="mr-10 group relative">
          <Image className='rounded-lg group-hover:blur-sm  cursor-pointer' src="https://images.pexels.com/photos/17839493/pexels-photo-17839493/free-photo-of-young-woman-in-sports-clothing.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sliderimg" width={300}  height={300} />
          <div className='overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100   transition duration-300'>
            {/* Social links */}
            <div className='flex space-x-4 text-2xl text-rose-500'>
              <div className='bg-slate-900/50 p-3 rounded-full'>

              <FaFacebook />
              </div>
              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaTwitter />
              </div >

              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaInstagram />
              </div>

            </div>
          </div>

          <h3 className='py-3 text-center text-2xl font-extrabold uppercase'>Amelia Grace</h3>
          <p className='text-xl font-bold text-rose-500 text-center'>Group Fitness Instructor</p>
          </div>




          <div className="mr-10 group relative">
          <Image className='rounded-lg group-hover:blur-sm  cursor-pointer' src="https://images.pexels.com/photos/4498572/pexels-photo-4498572.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sliderimg" width={300}  height={300} />
          <div className='overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100   transition duration-300'>
            {/* Social links */}
            <div className='flex space-x-4 text-2xl text-rose-500'>
              <div className='bg-slate-900/50 p-3 rounded-full'>

              <FaFacebook />
              </div>
              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaTwitter />
              </div >

              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaInstagram />
              </div>

            </div>
          </div>


          <h3 className='py-3 text-center text-2xl font-extrabold uppercase'>Sarah Michelle</h3>
          <p className='text-xl font-bold text-rose-500 text-center'>Yoga Instructor</p>
          </div>







          <div className="mr-10 group relative">
          <Image  className='rounded-lg group-hover:blur-sm  cursor-pointer'  src="https://images.pexels.com/photos/5327494/pexels-photo-5327494.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sliderimg" width={300}  height={300} />
          <div className='overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100   transition duration-300'>
            {/* Social links */}
            <div className='flex space-x-4 text-2xl text-rose-500'>
              <div className='bg-slate-900/50 p-3 rounded-full'>

              <FaFacebook />
              </div>
              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaTwitter />
              </div >

              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaInstagram />
              </div>

            </div>
          </div>

          <h3 className='py-3 text-center text-2xl font-extrabold uppercase'>Frederick David</h3>
          <p className='text-xl font-bold text-rose-500 text-center'>Cardiovascular Trainer</p>
          </div>

          <div className="mr-10 group relative">
          <Image  className='rounded-lg group-hover:blur-sm  cursor-pointer'  src="https://images.pexels.com/photos/6550868/pexels-photo-6550868.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sliderimg" width={300}  height={300} />
          <div className='overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100   transition duration-300'>
            {/* Social links */}
            <div className='flex space-x-4 text-2xl text-rose-500'>
              <div className='bg-slate-900/50 p-3 rounded-full'>

              <FaFacebook />
              </div>
              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaTwitter />
              </div >

              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaInstagram />
              </div>

            </div>
          </div>

          <h3 className='py-3 text-center text-2xl font-extrabold uppercase'>Madison Paige</h3>
          <p className='text-xl font-bold text-rose-500 text-center'>Zumba Instructor</p>
          </div>

          <div className='mr-10 group relative'>
          <Image  className='rounded-lg group-hover:blur-sm  cursor-pointer'  src="https://images.pexels.com/photos/7289305/pexels-photo-7289305.jpeg?auto=compress&cs=tinysrgb&w=600" alt="sliderimg" width={300}  height={300} />
          <div className='overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100   transition duration-300'>
            {/* Social links */}
            <div className='flex space-x-4 text-2xl text-rose-500'>
              <div className='bg-slate-900/50 p-3 rounded-full'>

              <FaFacebook />
              </div>
              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaTwitter />
              </div >

              <div className='bg-slate-900/50 p-3 rounded-full'>
                <FaInstagram />
              </div>

            </div>
          </div>

          <h3 className='py-3 text-center text-2xl font-extrabold uppercase'>Thomas Alexander</h3>
          <p className='text-xl font-bold text-rose-500 text-center'>Wellness Coach</p>
          </div>

         </Marquee>
    </div>
  );
};

export default Slider;