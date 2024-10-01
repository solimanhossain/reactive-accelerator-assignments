import { useState } from "react";
import Search from "./search/Search";
import Table from "./table/Table";

export default function Student() {
    const [searchWord, setSearchWord] = useState('');
    function handleChange(searchValue) {
        setSearchWord(searchValue);
    }

    return (
        <section className="py-24 lg:pt-[120px] lg:pb-28">
            <div className="container">
                <Search onSearch={handleChange} />
                <Table word={searchWord} />
            </div>
        </section>
    );
}