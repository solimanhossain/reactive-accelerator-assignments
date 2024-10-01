import NewsCategory from "./NewsCategory";
import findDate from "../utils/findDate";
import Logo from "../assets/logo/logo.png";
import Globe from "../assets/icons/globe.svg";
import SearchLogo from "../assets/icons/search.svg";
import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../contexts/NewsContext";
import useDebouncedValue from "../hooks/useDebouncedValue";

export default function Header() {
    const [keyword, setKeyword] = useContext(NewsContext);
    const [searchTerm, setSearchTerm] = useState("");

    const debouncedSearchTerm = useDebouncedValue(searchTerm, 1000);

    useEffect(() => {
        if (debouncedSearchTerm) setKeyword(`search?q=${debouncedSearchTerm}`);
        return () => setKeyword("top-headlines");
    }, [debouncedSearchTerm, setKeyword]);

    return (
        <nav className="border-b border-black py-6 md:py-8 relative">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                    <img src={Globe} />
                    <span>{findDate()}</span>
                </div>

                <div className="flex space-x-3 lg:space-x-8 relative">
                    <a href="/">
                        <img
                            className="max-w-[100px] md:max-w-[165px]"
                            src={Logo}
                            alt="Lws"
                        />
                    </a>
                </div>

                <div className="flex space-x-3 lg:space-x-8 relative">
                    <img
                        className=" right-0 top-0 mt-1 mr-2 z-10"
                        src={SearchLogo}
                    />
                    <input
                        className="bg-transparent focus:bg-white absolute right-1 block h-8 px-5 rounded size-0 duration-700 focus:cursor-text cursor-pointer focus:w-48 focus:text-black z-20 focus:z-0"
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="container mx-auto mt-6">
                <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                    <NewsCategory item={"Home"} />
                    <NewsCategory item={"General"} />
                    <NewsCategory item={"Business"} />
                    <NewsCategory item={"Entertainment"} />
                    <NewsCategory item={"Health"} />
                    <NewsCategory item={"Science"} />
                    <NewsCategory item={"Sports"} />
                    <NewsCategory item={"Technology"} />
                </ul>
            </div>
        </nav>
    );
}
