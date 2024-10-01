export default function Footer() {
    const copyrightTxt = "Copyright ©2024 | All rights reserved by Learn with Sumit";
    return (
        <footer className="py-6 md:py-8">
            <div className="container mx-auto">
                <p className="text-center text-base text-gray-500">{copyrightTxt}</p>
            </div>
        </footer>
    );
}