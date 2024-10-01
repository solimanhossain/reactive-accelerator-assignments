import { useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";
import useNewsQuery from "../hooks/useNewsQuery";
import dateFormat from "../utils/dateFormat";
import NewsList from "./NewsList";
import LeftTop from "./LeftTop";

export default function LeftSection() {
    let [keyword] = useContext(NewsContext);
    const allNews = useNewsQuery(keyword);
    let isTopShow =
        allNews && allNews[2] && allNews[4] && keyword === "top-headlines";
    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {/* if select category top part will off */}
            {isTopShow && (
                <LeftTop boldNews={allNews[2]} wideNews={allNews[4]} />
            )}
            {allNews &&
                allNews.map((news, index) => {
                    return (
                        news.description && (
                            <div
                                className="col-span-12 md:col-span-6 lg:col-span-4"
                                key={news.source.id + index}
                            >
                                <NewsList
                                    title={news.title}
                                    description={news.description}
                                    date={dateFormat(news.publishedAt)}
                                    url={news.url}
                                />
                            </div>
                        )
                    );
                })}
        </div>
    );
}
