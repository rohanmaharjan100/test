import React from "react";
import NextJSIcon from "../assets/NextJs.svg";
import NodeJSIcon from "../assets/NodeJs.svg";
import TypescriptIcon from "../assets/Typescript.svg";
import ApolloIcon from "../assets/Apollo.svg";
import GraphQLIcon from "../assets/GraphQL.svg";
import PostgresSQLIcon from "../assets/PostgresSQL.svg";
import ReactJSIcon from "../assets/ReactJs.svg";
import docker from "../assets/docker-svgrepo-com.svg";

const TechStack = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl px-8  mb-16 text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
       My Favrouite Tech Stack
      </h1>
      <div class="grid grid-cols-5 gap-8">
        <div className="lg:pr-128 pr-32">
          <img
            layout="fixed"
            src={NextJSIcon}
            width={100}
            height={100}
            alt="nextjs"
          />
        </div>
        <div className="lg:pr-128 pr-32 ">
          <img
            layout="fixed"
            src={ReactJSIcon}
            width={100}
            height={100}
            alt="reactjs"
          />
        </div>
        <div className="lg:pr-128 pr-32 ">
          <img
            layout="fixed"
            src={NodeJSIcon}
            width={100}
            height={100}
            alt="nodejs"
          />
        </div>
        <div className="lg:pr-128 pr-32 ">
          <img
            layout="fixed"
            src={TypescriptIcon}
            width={100}
            height={100}
            alt="typescript"
          />
        </div>
        <div className="lg:pr-128 pr-32 ">
          <img
            layout="fixed"
            src={PostgresSQLIcon}
            width={100}
            height={100}
            alt="postgresql"
          />
        </div>
        <div className="lg:pr-128 pr-32 ">
          <img
            layout="fixed"
            src={GraphQLIcon}
            width={100}
            height={100}
            alt="graphql"
          />
        </div>

        <div className="lg:pr-128 pr-32 ">
          <img
            layout="fixed"
            src={ApolloIcon}
            width={100}
            height={100}
            alt="apollo"
          />
        </div>
        <div className="lg:pr-128 pr-32 ">
          <img
            layout="fixed"
            src={docker}
            width={100}
            height={100}
            alt="apollo"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
