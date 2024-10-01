import Link from "next/link";
import BgImg from "./BgImg";
import discountedPrice from "@/utils/discountedPrice";
import captalizeWord from "@/utils/captalizeWord";

export default function ProductList({ product }) {
    const {
        id,
        title,
        description,
        price,
        discountPercentage,
        category,
        thumbnail,
    } = product;

    return (
        <div>
            <div className="relative delay-150 h-[205px] w-[180px] lg:w-[270px]  lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform">
                <BgImg imgurl={thumbnail} />
            </div>

            <h2 className="text-sm lg:text-base mt-2">
                <Link className="text-base font-bold" href={`/products/${id}`}>
                    {title}
                </Link>
                <span className="text-[#919090]">
                    <Link href={`/category/${category}`}>
                        {` (${captalizeWord(category)})`}
                    </Link>
                </span>
            </h2>
            <p className="text-[#919090] text-sm">{description}</p>

            <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">${price}</span> $
                {discountedPrice(price, discountPercentage)}
            </p>
        </div>
    );
}
