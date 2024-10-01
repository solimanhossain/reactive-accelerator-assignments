import herosvg from "./../../../src/assets/hero-graphics.svg"
import TextImage from "./TextImage";


export default function Hero() {
    return (
        <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
            <div className="container">
                <TextImage heroTxtContent={"The Future of Learning starts with students at the center"}
                    btnTxt={"Learn More"} heroImg={herosvg} />
            </div>
        </section>
    );
}