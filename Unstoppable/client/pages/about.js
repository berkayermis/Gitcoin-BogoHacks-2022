import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div class="overflow-hidden mb-20 mt-20">
            <div class="mx-auto px-6 md:px-12 relative z-10 flex items-center xl:py-40">
                    <div className='mx-auto text-center w-[70%] font-bold'>
            <p>
            uniDAO is a platform where any university blockchain community can enroll to the platform and promote their roof organization to have all the university communities as much as they can.
            </p>
            <p className='mt-5'>
            In this example, MedipolDAO that represents the Istanbul Medipol University will be a member of the uniDAO and their members will be creating a poll to improve their campus like EIPs but the students will access to the platform via Unstoppable Domains with their Human Check.
            </p>
                    </div>
            </div>
        </div>
        
    );
}

export default Hero;