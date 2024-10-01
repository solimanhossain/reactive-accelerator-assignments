"use client";

import { useParams, useRouter } from "next/navigation";
import ProductList from "@/components/ProductList";
import data from "@/database/data.json";
import Button from "./Button";

export default function ProductCategory() {
    const params = useParams();
    const router = useRouter();

    const categoryProducts =
        params.categoryName === "all"
            ? data.products
            : filterData(data.products, params.categoryName);

    const categoryList = data.products.map((product) => product.category);
    const uniqueCategory = Array.from(new Set(categoryList));

    return (
        <main>
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
                    <button
                        onClick={() => router.push(`/category`)}
                        className="hover:border-b  border-black block h-6 box-border mt-4"
                    >
                        All
                    </button>

                    {uniqueCategory.map((category) => (
                        <Button
                            key={category}
                            category={category}
                            isActive={category === params.categoryName}
                        />
                    ))}
                </div>

                <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                    {categoryProducts.map((product) => (
                        <ProductList key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export function filterData(products, check) {
    return products.filter((product) => product.category === check);
}
