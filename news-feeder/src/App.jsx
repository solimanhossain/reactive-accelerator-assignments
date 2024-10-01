import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import { NewsContext } from "./contexts/NewsContext";

function App() {
    const [keyword, setKeyword] = useState("top-headlines");
    let isShow = 0 > keyword.search("search");

    return (
        <>
            <NewsContext.Provider value={[keyword, setKeyword]}>
                <Header />
                <main className="my-10 lg:my-14">
                    {/* if search time left bar will off */}
                    <div
                        className={`container mx-auto grid gap-8 ${
                            isShow && "grid-cols-12"
                        }`}
                    >
                        <LeftSection />
                        {isShow && <RightSection />}
                    </div>
                </main>
                <Footer />
            </NewsContext.Provider>
        </>
    );
}

export default App;
