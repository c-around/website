import Image from "next/image";
import Link from "next/link";


const DroneSection = () => {
    const images = new Array(6).fill(0).map((_, i) => `/images/services/drone/${i}.webp`)

    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
                    Dronen Fotografie
                    <p
                        className="text-lg text-gray-300"
                    >Alle Bilder sind &copy; Copyright geschützt und Eigentum von <Link className={'hover:underline text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400'} href={'https://c-around.ch'}>C Around</Link>.
                    </p>
                </h2>
                <div
                    className={
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    }
                >

                    {
                        images.map((image, index) => (
                            <Image src={image} key={index} className="rounded-lg shadow-md"
                                   width={500} height={500}
                                   alt={""}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default DroneSection;