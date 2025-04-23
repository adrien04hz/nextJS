'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
    num: string;
    question: string;
    answer: string;
}



export const ElementoPregunta = ({num, question, answer} : Props) => {
    
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

            <div className="w-full md:px-6">
                <div id="mainHeading" className="flex justify-between items-center w-full">
                    <div className="">
                        <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800"><span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q{num}.</span> {question}</p>
                    </div>
                    <button className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ${isVisible ? 'rotate-180' : ''}`} onClick={toggleVisibility}>

                        <Image 
                            className="transform dark:hidden" 
                            width={20}
                            height={20}
                            alt="toggler" 
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" 
                        /> 

                        <Image 
                            className="transform dark:block hidden " 
                            alt="toggler" 
                            width={40}
                            height={40}
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" 
                        />
                        
                    </button>
                </div>

                {
                    isVisible ? 
                    <div id="menu" className="mt-6 w-full">
                        <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">{answer}</p>
                    </div> : ''
                }

            </div>
        </div>
    );
}