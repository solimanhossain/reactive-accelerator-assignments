import "./globals.css";

export const metadata = {
    title: "News API by Soliman Hossain",
    description: "News Contents Provided by API",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
