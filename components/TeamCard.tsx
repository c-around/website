import Image from 'next/image';
import {LucideIcon} from "lucide-react";
import {TablerIcon} from "@tabler/icons-react";
import Link from "next/link";

export function TeamCard({name, role, image, socials}: {
    name: string,
    role: string,
    image: string,
    socials: { Icon: LucideIcon | TablerIcon, url: string }[]
}) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-white text-zinc-800 grid">
                {/*<div*/}
                {/* className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white text-zinc-800"*/}
                {/*>*/}
                {/*    <Camera size={64} />*/}
                {/*</div>*/}
                <Image
                    src={image}
                    alt={''}
                    layout="fill"
                    className={'transition-transform duration-300 hover:scale-110 row-start-1 col-start-1 bg-cover'}
                />
            </div>
            <h3 className="text-xl font-bold text-zinc-200 mt-4">{name}</h3>
            <p className="text-zinc-300">{role}</p>
            <div className="flex gap-4 mt-4 ">
                {socials.map(({Icon, url}, index: number) => (
                    <Link
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={'hover:text-sky-300 hover:bg-sky-300/10 transition-colors bg-zinc-900/50 p-2 rounded-full text-zinc-300'}
                    >
                        <Icon size={24}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}