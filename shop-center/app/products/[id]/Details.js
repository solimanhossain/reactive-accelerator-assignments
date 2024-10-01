import Link from "next/link";
import TwemojiStar from "./TwemojiStar";
import captalizeWord from "@/utils/captalizeWord";

export default function Details({
    title,
    category,
    totalStar,
    finalPrice,
    description,
    price,
}) {
    return (
        <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                {title}
            </h1>

            <Link href={`/category/${category}`}>
                <span className="text-[#919090] my-3">
                    {captalizeWord(category)}
                </span>
            </Link>

            <div className="mt-3 flex items-center justify-start gap-1">
                {totalStar.map((_, index) => (
                    <TwemojiStar key={index} />
                ))}
            </div>

            <hr className="my-5 bg-black" />

            <div>
                <p className="my-3">
                    <span className="text-rose-600 opacity-60 line-through">
                        ${price}
                    </span>
                    <span className="font-bold text-2xl">${finalPrice}</span>
                </p>
            </div>

            <div>
                <p className="leading-7">{description}</p>
                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                    Add To Cart - ${finalPrice}
                </button>
            </div>
        </div>
    );
}
