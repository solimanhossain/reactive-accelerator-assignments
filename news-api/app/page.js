import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen p-10 bg-gray-700">
            <div className="bg-stone-900/90 flex flex-col gap-10 text-white p-24 rounded-sm">
                <h1 className="text-4xl font-bold flex justify-center bg-neutral-900/80 rounded-sm py-8">
                    <Link href="http://localhost:3000/v1/">News API</Link>
                    <span>&nbsp;:&nbsp;</span>
                    <Link href="https://github.com/solimanhossain/">
                        Soliman Hossain
                    </Link>
                </h1>
                <article className="grid grid-cols-2 gap-y-2 border border-stone-800 rounded-sm">
                    <div className="col-span-2">
                        <h2 className="text-3xl font-bold p-4">
                            End-point: Top Headlines
                        </h2>
                        <Image
                            src="/category.png"
                            className="w-full"
                            alt="Categorys"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="col-span-2">
                        <h2 className="text-3xl font-bold p-4">
                            End-point: Search News
                        </h2>
                        <Image
                            src="/search.png"
                            alt="Search"
                            className="w-full"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="col-span-2">
                        <h2 className="text-3xl font-bold p-4">
                            API Response Format
                        </h2>
                        <Image
                            src="/response.png"
                            alt="Response"
                            className="w-full"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </article>
            </div>
        </main>
    );
}
