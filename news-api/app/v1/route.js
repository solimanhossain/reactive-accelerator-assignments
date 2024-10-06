const data = async () => await import("@/database/news.json");

// Function to handle CORS
function setCorsHeaders(response) {
    response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allowed methods
    response.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    ); // Allowed headers
    return response;
}

export async function GET() {
    const newsData = await data();

    // Create the response with JSON data
    let response = Response.json(newsData);

    // Set the CORS headers
    response = setCorsHeaders(response);

    return response;
}

// Handle OPTIONS request for preflight (CORS)
export function OPTIONS() {
    let response = new Response(null, { status: 204 }); // Empty response for preflight requests
    response = setCorsHeaders(response); // Set CORS headers
    return response;
}
