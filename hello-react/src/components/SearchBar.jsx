export function SearchBar({searchProduct, handleStokedToggle}) {
    return (
        <form className="flex flex-col gap-2 mb-4">
            <input onChange={searchProduct} className="bg-gray-100 p-4 rounded-3xl" type="search" placeholder="Search...." name="search" id="search" />
            <label>
                <input onClick={handleStokedToggle} type="checkbox" id="stocked" name="stocked" /> Only show products in stock
            </label>
        </form>
    );
}