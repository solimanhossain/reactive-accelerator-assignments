import { NextResponse } from "next/server";

const data = async () => await import("@/database/news.json");

function setCorsHeaders(response) {
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    return response;
}

const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
];

export async function GET(NextRequest, { params: { find } }) {
    const url = new URL(NextRequest.url);
    const searchParams = url.searchParams;
    const newsData = await data();

    if (!url.search && find === "top-headlines") {
        let response = NextResponse.json(newsData["general"]);
        return setCorsHeaders(response);
    }

    const category = searchParams.get("category");
    const q = searchParams.get("q");

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
            let response = NextResponse.json(newsData[category]);
            return setCorsHeaders(response);
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
        const response = NextResponse.json(result);
        return setCorsHeaders(response);
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

export function OPTIONS() {
    let response = new NextResponse(null, { status: 204 });
    response = setCorsHeaders(response);
    return response;
}
