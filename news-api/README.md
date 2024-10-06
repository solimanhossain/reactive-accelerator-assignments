## End-point: Top Headlines

### GET /v1/top-headlines

This endpoint retrieves the top headlines based on the specified category. If no category is provided, the general news will be returned.

#### Request Parameters

-   `category` (optional, string) - The category for which the top headlines are to be retrieved. Available categories include general, business, entertainment, health, science, sports, and technology.

#### Response

The response will be in JSON format with the following structure:

```json
{
    "status": "",
    "totalResults": 0,
    "articles": [
        {
            "source": {
                "id": "",
                "name": ""
            },
            "author": "",
            "title": "",
            "description": null,
            "url": "",
            "urlToImage": null,
            "publishedAt": "",
            "content": null
        }
    ]
}
```

### Method: GET

> ```
> http://sol-news-api/v1/top-headlines?category=general
> ```

### Query Params

| Param    | value   |
| -------- | ------- |
| category | general |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Search News

### GET /v1/search

This endpoint makes an HTTP GET request to search for the query "Develop". The response is in JSON format and includes a status code of 200. The response structure is as follows:

-   `totalResults` (number): The total number of results for the search query.
-   `result` (array): An array containing the search results, where each result object includes the following properties:
    -   `source` (object): Information about the source of the result, including `id` and `name`.
    -   `author` (string): The author of the result.
    -   `title` (string): The title of the result.
    -   `description` (string): The description of the result.
    -   `url` (string): The URL of the result.
    -   `urlToImage` (string): The URL to the image associated with the result.
    -   `publishedAt` (string): The date and time when the result was published.
    -   `content` (string): The content of the result.

### Method: GET

> ```
> http://sol-news-api/v1/search?q=Develop
> ```

### Query Params

| Param | value   |
| ----- | ------- |
| q     | Develop |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
