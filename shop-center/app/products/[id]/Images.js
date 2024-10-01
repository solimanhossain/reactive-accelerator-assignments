import Image from "next/image";
import { useState } from "react";

export default function Images({ thumbnail, images }) {
    const [currentThumbnail, setCurrentThumbnail] = useState(thumbnail);

    return (
        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
                src={currentThumbnail}
                className="w-[400px] h-[500px] mx-auto object-cover"
                alt="thumbnail"
                width={400}
                height={500}
            />

            <div className="flex flex-wrap gap-4 mt-4">
                {images.slice(0, 4).map((image, index) => (
                    <Image
                        src={image}
                        className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
                        alt={`thumbnail-${index}`}
                        height={100}
                        width={100}
                        key={index}
                        onClick={() => setCurrentThumbnail(image)}
                    />
                ))}
            </div>
        </div>
    );
}
