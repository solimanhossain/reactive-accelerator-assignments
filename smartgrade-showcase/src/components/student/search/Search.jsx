import Box from "./Box";

export default function Search({ onSearch }) {

    function handlePass(searchValue) {
        onSearch(searchValue);
    }

    return (
        <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            <Box onPass={handlePass} />
        </div>
    );
}