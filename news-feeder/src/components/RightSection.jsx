import useNewsQuery from "../hooks/useNewsQuery";
import dateFormat from "../utils/dateFormat";
import NewsList from "./NewsList";

export default function RightSection() {
    const news = useNewsQuery("top-headlines");

    return (
        <div className="col-span-12 self-start xl:col-span-4">
            {news && (
                <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                    <div className="col-span-12 mb-6 md:col-span-8">
                        <img
                            className="w-full"
                            src={news[3].urlToImage}
                            alt="thumb"
                        />
                        <div className="col-span-12 mt-6 md:col-span-4">
                            <a href="#">
                                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                                    {news[3].title}
                                </h3>
                            </a>
                            <p className="text-base text-[#292219]">
                                {news[3].description}
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                {news[3].publishedAt}
                            </p>
                        </div>
                    </div>

                    {news.map((news, index) => {
                        return (
                            news.description &&
                            index !== 3 && (
                                <div
                                    className="col-span-12 md:col-span-8"
                                    key={news.source.id + index}
                                >
                                    <NewsList
                                        title={news.title}
                                        description={news.description}
                                        date={dateFormat(news.publishedAt)}
                                        url={news.url}
                                        text2xl
                                    />
                                </div>
                            )
                        );
                    })}
                </div>
            )}
        </div>
    );
}
