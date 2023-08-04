import Image from "next/image";

const Progress = () => {
    return (
        <section className="mt-32 xl:mt-48 mb-16 px-12 lg:px-0">
            <h1 className=" sm:text-2xl text-center lg:text-3xl xl:text-5xl font-bold ">
                Our Fitness <span className="text-rose-500">Plans</span>
            </h1>
            <p className="max-w-2xl text-sm text-gray-600 mx-auto leading-relaxed text-center pt-3">Tailored strategies that guide individuals through exercises, nutrition, and lifestyle adjustments, all aimed at achieving optimal health and wellness</p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                <div className="hover:scale-105 duration-500 group">
                    <Image  width={500} height={500} src="https://images.pexels.com/photos/17542096/pexels-photo-17542096/free-photo-of-bearded-man-in-white-t-shirt-lifting-weight-at-gym.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gym day" />

                    <div className="uppercase  text-sm flex items-center space-x-2 font-bold pt-3">
                        <p>Coaching</p>
                        <div className="w-2 h-2  rounded-full bg-rose-500"></div>
                        <p>Trancing</p>
                    </div>

                    <h2 className="text-2xl font-bold py-3">
                    Cardio Fitness Session
                    </h2>

                    <div className="w-full  h-2 bg-gray-200  mt-4 rounded-full">
                        <div className="w-0 bg-rose-500 h-full group-hover:w-full rounded-full duration-500">

                        </div>
                    </div>
                </div>

                <div className="hover:scale-105 duration-500 group md:order-3 lg:order-none">
                <Image width={500} height={500} src="https://images.pexels.com/photos/9283300/pexels-photo-9283300.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gym day" />

                <div className="uppercase  text-sm flex items-center space-x-2 font-bold pt-3">
                        <p>Coaching</p>
                        <div className="w-2 h-2  rounded-full bg-rose-500"></div>
                        <p>Trancing</p>

                    </div>
                    <h2 className="text-2xl font-bold py-3">
                    Movement and Fitness Day
                    </h2>

                    <div className="w-full  h-2 bg-gray-200  mt-4 rounded-full">
                        <div className="w-0 bg-rose-500 h-full group-hover:w-full rounded-full duration-500">

                        </div>
                    </div>


                </div>


                <div className="hover:scale-105 duration-500 group">
                <Image width={500} height={500} src="https://images.pexels.com/photos/6456159/pexels-photo-6456159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="gym day" />


                <div className="uppercase  text-sm flex items-center space-x-2 font-bold pt-3">
                        <p>Coaching</p>
                        <div className="w-2 h-2  rounded-full bg-rose-500"></div>
                        <p>Challenge</p>
                    </div>

                    <h2 className="text-2xl font-bold py-3">
                    Structural Mastery
                    </h2>

                    <div className="w-full  h-2 bg-gray-200  mt-4 rounded-full">
                        <div className="w-0 bg-rose-500 h-full group-hover:w-full rounded-full duration-500">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Progress;