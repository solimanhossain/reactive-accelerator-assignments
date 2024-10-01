// eslint-disable-next-line react/prop-types
export default function TextImage({ heroTxtContent, btnTxt, heroImg }) {
    return (
        <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
            <img className="md:order-2 object-cover ml-auto animate-updown" src={heroImg} width="500px" height="500px" alt="Banner" />
            <div>
                <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8"> {heroTxtContent}</h1>
                <a className="px-5 py-2.5 bg-[#038C61] rounded-[44px]" href="#">{btnTxt}</a>
            </div>
        </div>
    );
}