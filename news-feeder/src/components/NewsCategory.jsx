import { useContext } from "react";
import { NewsContext } from "../contexts/NewsContext";

let home = [
    "Home",
    "Terms of Use",
    "Privacy",
    "Cookies Policy",
    "Manage Cookies",
    "Accessibility",
    "Contact Us",
];

export default function NewsCategory({ item, textSm, fontbold, isdisable }) {
    const [keword, setKeyword] = useContext(NewsContext);

    function hanldleClick(e) {
        e.preventDefault();
        let category = e.target.text;
        if (home.includes(category)) setKeyword("top-headlines");
        else setKeyword(`top-headlines?category=${category.toLowerCase()}`);
    }

    return (
        <li>
            <a
                href="#"
                onClick={hanldleClick}
                className={`${textSm && "text-sm"} ${
                    fontbold && "font-semibold"
                }`}
            >
                {item}
            </a>
        </li>
    );
}
