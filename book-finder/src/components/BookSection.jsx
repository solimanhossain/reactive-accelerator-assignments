import { useState } from "react";
import Sort from "./booksection/Sort";
import Search from "./booksection/Search";
import Book from "./booksection/Book";
import Button from "./booksection/Button";
import Star from "./../../src/assets/star.svg"
import BookListData from "./../../src/assets/data.json"


export default function BookSection() {
    const [bookList, setbookList] = useState(BookListData);
    const bookListComponent = [];
    bookList.map((list) => {
        bookListComponent.push(<Book key={list.id} {...list} StarIcon={Star}><Button /></Book>)
    });

    function handleChange(afterSearch){
        setbookList(afterSearch);
    }

    return (
        <main className="my-10 lg:my-14">
            <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
                <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4" >
                    <Search onSearch={handleChange} bookListComponent={BookListData} />
                    <Sort onSort={handleChange} bookListComponent={bookList} />
                </div>
            </header>
            <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
                {bookListComponent}
            </div>
        </main>
    );
}