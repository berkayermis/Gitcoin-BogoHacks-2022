import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import college from '../../public/college.png';
import Link from 'next/link';

const Hero = () => {
    return (
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col -mt-10">
            <Image class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={college} width={400} height={400} />
            <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#4d47f8] mt-5">uniDAO</h1>
            <p class="mb-8 leading-relaxed text-[#333]">
            uniDAO is a platform where any university blockchain community can enroll to the platform and promote their roof organization to have all the university communities as much as they can.
            </p>
            <div class="flex justify-center">
                <Link href={"/apply"}>
                    <button class="inline-flex text-white bg-[#4d47f8] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Apply</button>
                </Link>
            </div>
            </div>
        </div>
        </section>
    );
}

export default Hero;