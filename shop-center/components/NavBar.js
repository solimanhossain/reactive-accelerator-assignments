import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@/public/svg/menu.svg";
import CartIcon from "@/public/svg/cart.svg";
import LwsBlackLogo from "@/public/assets/lws.svg";
import AvatarIcon from "@/public/svg/avatar.svg";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
            <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
                <div className="flex items-center gap-2">
                    <Image
                        src={MenuIcon}
                        className="lg:hidden w-5 h-5"
                        alt="MenuIcon"
                    />
                    <Link href="/">
                        <Image
                            src={LwsBlackLogo}
                            className="h-10 w-auto"
                            alt="LwsBlackLogo"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
                <Image
                    src={AvatarIcon}
                    className="hidden lg:block w-[18px] h-[18px] hover:cursor-pointer"
                    alt="login acount avatar"
                />
                <Image
                    src={CartIcon}
                    className="block w-5 h-5 hover:cursor-pointer"
                    alt="shopping cart icon"
                />
            </div>
        </nav>
    );
}
