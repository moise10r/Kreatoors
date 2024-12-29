'use client'

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function CarouselNavigation() {
    return (
        <Carousel
            className=""
            transition={{ duration: 1 }}
            autoplay={true}
            autoplayDelay={4000}
            loop={true}
            prevArrow={false}
            nextArrow={false}
        >
            <div className="flex justify-center items-center h-full">
                <Image src="/image1.png" alt="" width={400} height={400} quality={100} className="w-96" />
            </div>
            <div className="flex justify-center items-center h-full">
                <Image src="/image2.png" alt="" width={400} height={400} quality={100} className="w-96" />
            </div>
            <div className="flex justify-center items-center h-full">
                <Image src="/image3.png" alt="" width={400} height={400} quality={100} className="w-96" />
            </div>
        </Carousel>
    );
}