"use client"

import Image from "next/image";
import Link from "next/link";
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    640: 1
};

const DroneSection = () => {
    const images = new Array(6).fill(0).map((_, i) => `/images/services/drone/${i}.webp`)

    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
                    Dronen Fotografie
                    <p className="text-lg text-gray-300 mt-2">
                        Alle Bilder sind &copy; Copyright geschützt und Eigentum von{' '}
                        <Link
                            className="hover:underline text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400"
                            href="https://c-around.ch"
                        >
                            C Around
                        </Link>.
                    </p>
                </h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                >
                    {images.map((image, index) => (
                        <div key={index} className="mb-8">
                            <Image
                                src={image}
                                className="rounded-lg shadow-md w-full h-auto"
                                width={500}
                                height={500}
                                alt={`Drone photography image ${index + 1}`}
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
        </section>
    );
}

export default DroneSection;