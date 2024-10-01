import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Shop Center | Learn with Sumit",
    description: "LWS task done by Soliman Hossain",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                {children}
                <FooterBar />
            </body>
        </html>
    );
}
