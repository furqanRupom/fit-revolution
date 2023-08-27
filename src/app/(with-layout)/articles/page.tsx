"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";
import Connect from "@/components/Connect";
import Loading from "./loading";

const articlesPage = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/articles").then((res) => {
      setArticle(res.data.articles);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/*  article image and title */}
      <div className="h-96 relative ">
        <Image
          className="w-full blur-sm object-cover h-96 object-center pt-12"
          width={500}
          height={200}
          src="https://images.pexels.com/photos/17898142/pexels-photo-17898142/free-photo-of-woman-exercising-at-the-gym.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="articleImage"
        />

        <h3 className=" text-7xl text-center uppercase absolute top-1/2 w-full h-full z-40 text-white">
          Articles
        </h3>
      </div>
      {!loading ? (
        <section >
          {/* main part */}

          <section className="my-12 mb-8 px-10 lg:px-10">
            <div className="flex items-center space-x-2 mt-12">
              <div className="w-[35%] h-[0.10rem] bg-gray-300"></div>
              <h2 className=" flex-grow text-2xl lg:text-3xl text-gray-600 text-center">
                "From Ideas to Articles"
              </h2>

              <div className="w-[35%] h-[0.10rem] bg-gray-300"></div>
            </div>
            <p className="leading-relaxed max-w-2xl text-sm mx-auto font-thin text-center pt-3">
              Explore techniques to spark innovative ideas in the fitness
              domain. Learn how to draw inspiration from personal experiences,
              current trends, and scientific research
            </p>

            {/*  article section part */}

            <article className="max-w-[1300px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
              {article.map(({ author, title, description, image, date }) => (
                <div
                  key={title}
                  className="shadow rounded-lg bg-white transition-transform transform hover:-translate-y-1"
                >
                  <div className="relative h-40">
                    <Image
                      className="rounded-tl-lg rounded-tr-lg object-cover object-center"
                      layout="fill"
                      objectFit="cover"
                      src={image}
                      alt="articleLogo"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{author}</h3>

                    <h4 className="text-lg font-medium ">{title}</h4>
                    <h6 className="text-sm italic text-gray-400  mb-4">
                      {date}
                    </h6>
                    <div className="relative border-l-4 pl-4 mt-2">
                      <FaQuoteLeft className="absolute text-gray-400 left-0 top-0 transform -translate-x-2 -translate-y-2" />
                      <blockquote className="italic text-gray-700">
                        {description}
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </article>
          </section>
        </section>
      ) : (
        <Loading />
      )}
      {/* socail section */}
      <section>
        <Connect />
      </section>
    </>
  );
};

export default articlesPage;
