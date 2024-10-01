"use client";

export default function Error({ error, reset }) {
    return (
        <main className="py-32 border">
            <div className="flex flex-col items-center gap-4 justify-between p-24">
                <p className="text-red-200 font-mono bg-red-500 rounded px-4 py-2 text-xs italic">
                    {error.message}
                </p>
                <h2>Something went wrong!</h2>

                <button
                    className="border border-black px-5 py-2 rounded-full  hover:bg-black hover:text-white duration-300"
                    onClick={() => reset()}
                >
                    Try Again
                </button>
            </div>
        </main>
    );
}
