import dateFormat from "../utils/dateFormat";

export default function LeftTop({ boldNews, wideNews }) {
    return (
        <>
            <div className="col-span-12 grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-4">
                    <a href={boldNews.url}>
                        <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                            {boldNews.title}
                        </h3>
                    </a>
                    <p className="text-base text-[#5C5955]">
                        {boldNews.content}
                    </p>
                    <p className="mt-5 text-base text-[#5C5955]">
                        {dateFormat(boldNews.publishedAt)}
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <img
                        className="w-full"
                        src={boldNews.urlToImage}
                        alt="thumb"
                    />
                    <p className="mt-5 text-base text-[#5C5955]">
                        Scource: {boldNews.source.name}
                    </p>
                </div>
            </div>

            <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
                <div className="col-span-12 md:col-span-6">
                    <a href={wideNews.url}>
                        <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                            {wideNews.title}
                        </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                        {wideNews.description}
                    </p>
                    <p className="mt-5 text-base text-[#5C5955]">
                        {dateFormat(wideNews.publishedAt)}
                    </p>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <img
                        className="w-full"
                        src={wideNews.urlToImage}
                        alt="thumb"
                    />
                </div>
            </div>
        </>
    );
}
