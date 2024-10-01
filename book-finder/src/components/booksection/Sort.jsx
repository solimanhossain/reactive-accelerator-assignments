export default function Sort({onSort, bookListComponent}) {
    function handleChange() {
        if (event.target.value === "name_asc") {
            const nameAscending = [...bookListComponent].sort((a, b) => a.name > b.name ? 1 : -1);
            onSort(nameAscending);

        } else if (event.target.value === "name_desc") {
            const nameDescending = [...bookListComponent].sort((a, b) => b.name > a.name ? 1 : -1);
            onSort(nameDescending);

        } else if (event.target.value === "year_asc"){
            const yearAscending = [...bookListComponent].sort((a, b) => a.year - b.year);
            onSort(yearAscending);

        } else if (event.target.value === "year_desc") {
            const yearDescending = [...bookListComponent].sort((a, b) => b.year - a.year);
            onSort(yearDescending);
        } else {
            const idDescending = [...bookListComponent].sort((a, b) => a.id - b.id);
            onSort(idDescending);
        }
    }

    return (
        <div className="flex items-stretch space-x-3">
            <select
                className="cursor-pointer rounded-md border px-4 py-2 text-gray-600"
                name="sortBy" id="sortBy" 
                onChange={handleChange}
            >
                <option value=''>Sort</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="year_asc">Publication Year (Oldest)</option>
                <option value="year_desc">Publication Year (Newest)</option>
            </select>
        </div>
    );
}