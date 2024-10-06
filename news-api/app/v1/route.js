const data = async () => await import("@/database/news.json");

export async function GET() {
    const newsData = await data();
    return Response.json(newsData);
}
