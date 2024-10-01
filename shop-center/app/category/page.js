"use client";

import { useRouter } from "next/navigation";
import ProductList from "@/components/ProductList";
import captalizeWord from "@/utils/captalizeWord";
import data from "@/database/data.json";

export default function Category() {
    const router = useRouter();

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
                        ▶ All
                    </button>

                    {uniqueCategory.map((category) => (
                        <button
                            className="hover:border-b border-black block h-6 box-border mt-5"
                            onClick={() => router.push(`/category/${category}`)}
                            key={category}
                        >
                            {captalizeWord(category)}
                        </button>
                    ))}
                </div>

                <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                    {data.products.map((product) => (
                        <ProductList key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
}
