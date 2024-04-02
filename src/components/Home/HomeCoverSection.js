import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return (
    <div className="inline-block flex justify-center ">
     
      <article className=" w-1/2 flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 z-0"
        />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover -z-10"
          sizes="100vw"
          priority
        />
        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} />
          <Link href={blog.url} className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl text-4xl">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in">{blog.description}</p>
        </div>
      </article>
      <div className="w-1/3 justify-center items-center mx-5 sm:mx-10 rounded-xl shadow-xl flex flex-col justify-evenly">
        <div className="w-1/3 flex"><img className="rounded-full" src="avatar.jpg" alt="avatar"/></div>
        <h2 className="text-5xl font-ds">Hi, I am Sumair</h2>
        <h1 className="text-5xl font-ds">Welcome to my Blog</h1>
        
        <p className="text-xl mt-10 px-5">Here I write about my take on different things. Tech, Books, My Thoughts.. </p>
        {/* <ul>
          <li>Passionate Frontend Engineer</li>
          <li>Loves to Write</li>
          <li>Lives in Pakistan</li>
          <li>Open to remote positions in all timezones</li>
          <li>Email: sumairqaisar992@gmail.com</li>
          <li>Contact: +92-3169204842</li>
        </ul> */}
        <div className="w-5/6">
      <div className=" mt-4 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
        <div className="px-4 py-3 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Fast Facts About Me</dt>
            {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Passionate Frontend Developer</dd> */}
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">I am a</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Passionate Front-end Developer</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Open to</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Remote Positions in <span className="bg-green-300 px-2 py-1 rounded-md">All Timezones</span></dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">sumairqaisar992@gmail.com</dd>
          </div>
          <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">My Resume</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    {/* <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">76kb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href='./resume.pdf' download className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                {/* <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li> */}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
      </div>
    </div>
  );
};

export default HomeCoverSection;
