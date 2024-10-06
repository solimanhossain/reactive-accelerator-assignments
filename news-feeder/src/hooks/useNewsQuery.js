import { useState, useEffect } from "react";

export default function useNewsQuery(keyword) {
    //  search?q=Develop
    const [news, setNews] = useState(null);

    useEffect(() => {
        let ignore = false;
        fetch(`https://sol-news-api.vercel.app/v1/${keyword}`)
            .then((response) => response.json())
            .then((json) => {
                if (!ignore) {
                    setNews(json.articles || json.result);
                }
            });
        return () => {
            ignore = true;
        };
    }, [keyword]);

    return news;
}
