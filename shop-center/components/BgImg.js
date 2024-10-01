import Image from "next/image";

export default function BgImg({ imgurl }) {
    return (
        <Image
            src={imgurl}
            className="object-cover z-0"
            alt="HeaderBackground"
            sizes="(max-width: 768px) 100vw,"
            fill
        />
    );
}
