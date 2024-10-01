import static_data from "@/database/data.json";
import Bottom from "@/components/Bottom";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { Suspense } from "react";

export default async function Home() {
    const data =
        (await fetch("https://dummyjson.com/products").then((res) =>
            res.json()
        )) ?? static_data;

    return (
        <main>
            <Header isShow />
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
                        {data.products?.slice(0, 12).map((product) => (
                            <ProductList key={product.id} product={product} />
                        ))}
                    </div>
                </Suspense>
            </section>
            <Bottom />
        </main>
    );
}
