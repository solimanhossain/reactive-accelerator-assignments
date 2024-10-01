import LogoLight from "../assets/logo/logo_light.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import NewsCategory from "./NewsCategory";

export default function Footer() {
    return (
        <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
            <div className="container mx-auto">
                <div className="xl:grid xl:grid-cols-12 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5">
                        <img
                            className="max-md:col-span-2"
                            src={LogoLight}
                            alt="lws"
                        />

                        <ul role="list" className="space-y-4">
                            <NewsCategory item={"Home"} textSm fontbold />
                            <NewsCategory item={"General"} textSm fontbold />
                            <NewsCategory item={"Business"} textSm fontbold />
                            <NewsCategory
                                item={"Entertainment"}
                                textSm
                                fontbold
                            />
                            <NewsCategory item={"Health"} textSm fontbold />
                            <NewsCategory item={"Science"} textSm fontbold />
                        </ul>
                        <ul role="list" className="space-y-4">
                            <NewsCategory item={"Sports"} textSm fontbold />
                            <NewsCategory item={"Technology"} textSm fontbold />
                        </ul>

                        <ul role="list" className="space-y-4">
                            <NewsCategory item={"Terms of Use"} isdisable />
                            <NewsCategory item={"Privacy"} isdisable />
                            <NewsCategory item={"Cookies Policy"} isdisable />
                            <NewsCategory item={"Manage Cookies"} isdisable />
                            <NewsCategory item={"Accessibility"} isdisable />
                            <NewsCategory item={"Contact Us"} isdisable />
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#">
                                <FaInstagram fontSize="1.5em" />
                            </a>
                            <a href="#">
                                <FaFacebook fontSize="1.5em" />
                            </a>
                            <a href="#">
                                <FaYoutube fontSize="1.5em" />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 mt-10 flex items-start gap-4 xl:col-span-5 xl:mt-0">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold">
                                {
                                    "Subscribe and be informed first hand about the actual economic news."
                                }
                            </h3>
                            <p className="mt-2 text-sm leading-6">
                                {
                                    "All the day's headlines and highlights, direct to you every morning.."
                                }
                            </p>
                        </div>
                        <button className="rounded-full bg-[#00D991] px-7 py-2.5 text-xs font-medium text-[#F1EFEA] hover:opacity-80 lg:text-base">
                            {"Subscribe"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mt-6 lg:mt-12">
                <p className="text-center">
                    Copyright &copy;2023 | All rights reserved by Learn with
                    Sumit
                </p>
            </div>
        </footer>
    );
}
