"use client";

import { useParams } from "next/navigation";
import discountedPrice from "@/utils/discountedPrice";
import data from "@/database/data.json";
import Details from "./Details";
import Images from "./Images";

export default function ProductDetails() {
    const params = useParams();
    const {
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        thumbnail,
        images,
    } = data.products[params.id - 1];
    const totalStar = Array(Math.round(rating)).fill();
    const finalPrice = discountedPrice(price, discountPercentage);

    return (
        <main>
            <section className="bg-[#fafaf2] h-full py-20">
                <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
                    <Images thumbnail={thumbnail} images={images} />

                    <Details
                        title={title}
                        category={category}
                        totalStar={totalStar}
                        description={description}
                        finalPrice={finalPrice}
                        price={price}
                    />
                </div>
            </section>
        </main>
    );
}
