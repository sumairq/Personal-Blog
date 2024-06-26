'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from '../Header/Icons';
import Link from 'next/link';
import siteMetadata from '@/src/utils/siteMetaData';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Sumair is Actively looking for a Job
      </h3>
      <div className='mt-4 w-40 bg-white rounded-full'>
      <img className='w-full' src='job-hunt.svg' alt='job hunt'/>
      </div>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Got an opportunity you want to discuss with him? 
      </p>
      <p className='mt-4 bg-green-600 px-2 py-1 rounded-xl'>Connect with Sumair</p>
      <p className="mt-3 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Email: sumairqaisar992@gmail.com
      </p>
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
          type="email"
          placeholder="Enter your email"
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />

        <input
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form> */}
        
      <div className="flex items-center mt-3">
        <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200 " />
        </a>
        <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200 " />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light"
        >
          <GithubIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200 " />
        </a>
        <a href={siteMetadata.dribbble} className="inline-block w-6 h-6 mr-4">
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200 " />
        </a>
      </div>
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">© 2023 Sumair. All rights reserved.</span>
        <Link href="/sitemap.xml" className="text-center underline my-4 md:my-0">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{' '}
          <a href="http://" className="underline">
            Sumair
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
