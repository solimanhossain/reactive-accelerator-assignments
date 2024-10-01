import { useState, useEffect } from "react";

export default function useNewsQuery(keyword) {
    //  search?q=Develop
    const [news, setNews] = useState(null);

    useEffect(() => {
        let ignore = false;
        fetch(`http://localhost:8000/v2/${keyword}`)
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
