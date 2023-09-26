import React from "react";
import NextJSIcon from "../assets/NextJs.svg";
import NodeJSIcon from "../assets/NodeJs.svg";
import TypescriptIcon from "../assets/Typescript.svg";
import ApolloIcon from "../assets/Apollo.svg";
import GraphQLIcon from "../assets/GraphQL.svg";
import PostgresSQLIcon from "../assets/PostgresSQL.svg";
import ReactJSIcon from "../assets/ReactJs.svg";
import docker from "../assets/docker-svgrepo-com.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Scrollbar } from "swiper/modules";

const TechStack = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl px-8  mb-16 text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        My Favrouite Tech Stack
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={100}
        slidesPerGroup={4}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[FreeMode, Pagination, Scrollbar]}
        className=""
      >
        <SwiperSlide>
          <div className="m-4">
            <img
              layout="fixed"
              src={NextJSIcon}
              width={200}
              height={200}
              alt="nextjs"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" m-4">
            <img
              layout="fixed"
              src={PostgresSQLIcon}
              width={200}
              height={200}
              alt="postgresql"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-4 ">
            <img
              layout="fixed"
              src={NodeJSIcon}
              width={200}
              height={200}
              alt="nodejs"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-4 ">
            <img
              layout="fixed"
              src={ReactJSIcon}
              width={200}
              height={200}
              alt="react"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="m-4 ">
            <img
              layout="fixed"
              src={docker}
              width={200}
              height={200}
              alt="apollo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-4 ">
            <img
              layout="fixed"
              src={GraphQLIcon}
              width={200}
              height={200}
              alt="graphql"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-4 ">
            <img
              layout="fixed"
              src={TypescriptIcon}
              width={200}
              height={200}
              alt="typescript"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-4 ">
            <img
              layout="fixed"
              src={ApolloIcon}
              width={200}
              height={200}
              alt="apollo"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TechStack;
