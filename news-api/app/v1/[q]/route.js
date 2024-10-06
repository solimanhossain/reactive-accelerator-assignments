import { NextResponse, NextRequest } from "next/server";

const data = async () => await import("@/database/news.json");

const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
];

export async function GET(NextRequest) {
    const url = new URL(NextRequest.url);
    const searchParams = url.searchParams;
    const newsData = await data();
    // console.log(searchParams, newsData);

    const category = searchParams.get("category");
    const q = searchParams.get("q");
    // console.log(category, q);

    if (category) {
        if (!categories.includes(category)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid category",
                },
                {
                    status: 400,
                }
            );
        } else {
            return NextResponse.json(newsData[category]);
        }
    } else if (q) {
        if (!q) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid query",
                },
                {
                    status: 400,
                }
            );
        }

        const result = {
            totalResults: 0,
            result: [],
        };
        for (const category of categories) {
            let matched = newsData[category].articles.filter((news) =>
                news.title.toLowerCase().includes(q.toLowerCase())
            );

            if (matched) result.result.push(...matched);
        }

        result.totalResults = result.result.length;
        return NextResponse.json(result);
    }

    return NextResponse.json(
        {
            success: false,
            message: "Invalid request",
        },
        {
            status: 400,
        }
    );
}
