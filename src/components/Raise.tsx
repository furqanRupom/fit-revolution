import Image from "next/image";
import {MdVerifiedUser} from 'react-icons/md'

const Raise = () => {
    return (
        <section className="px-8 lg:px-0 mt-32 mb-16 grid grid-cols-1 justify-items-center lg:justify-items-start lg:grid-cols-2 gap-10">
            <div className="relative">
                <Image className="z-20" src="https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={500} height={500}  alt="raise picture"/>

                <div className="absolute hidden lg:block  -z-10 -right-[20%] -bottom-6">
                <Image src="https://images.pexels.com/photos/1693968/pexels-photo-1693968.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" width={500} height={500}  alt="raise picture"/>

                </div>
            </div>


            <div className="md:ml-28">
                <h1 className="text-2xl md:text-3xl pt-12 lg:pt-4 uppercase font-bold">We boost your self-assurance</h1>


                <ul className="lg:pl-12 pt-12 flex flex-col space-y-6  text-sm">
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rose-500"><MdVerifiedUser /></span> <p>Regularly provide sincere and constructive feedback on their strengths and accomplishments.</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rose-500"><MdVerifiedUser /></span> <p>Help them set realistic goals that are challenging yet attainable. The process of achieving.</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rose-500"><MdVerifiedUser /></span> <p> Taking care of their mental and physical well-being can improve their overall confidence.</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rose-500"><MdVerifiedUser /></span> <p>Guide them through visualization exercises where they imagine themselves succeeding in various situations.</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rose-500"><MdVerifiedUser /></span> <p>Cultivate gratitude by focusing on the positive aspects of their life.</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="text-2xl text-rose-500"><MdVerifiedUser /></span> <p>Encourage them to step out of their comfort zones gradually. Each new experience can contribute to their sense of capability.</p>
                    </li>
                </ul>
            </div>


        </section>
    );
};

export default Raise;