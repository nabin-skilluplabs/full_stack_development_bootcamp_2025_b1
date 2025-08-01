import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import products from "../data/products";
import { useEffect, useState } from "react";

export default function FilterableProductTable() {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [query, setQuery] = useState('');
    const [stocked, setStocked] = useState();

    function handleStokedToggle(event) {
        const element = event.target;
        const isChecked = element.checked;
        setStocked(isChecked);
    }

    function searchProduct(event) {
        const element = event.target;
        const query = element.value;
        setQuery(query);
    }

    useEffect(() => {
        if(stocked) {
            const stockedProducts =  products.filter(product => product.stocked).filter(product => {
             return (product.name.toLowerCase()).includes(query.toLowerCase())
              || (product.category.toLowerCase()).includes(query.toLowerCase())
            });
            setFilteredProducts(stockedProducts);
         }
         else {
             setFilteredProducts(products.filter(product => {
                 return (product.name.toLowerCase()).includes(query.toLowerCase())
                  || (product.category.toLowerCase()).includes(query.toLowerCase())
                }));
         }
    }, [query, stocked])

    return (
        <div>
            
            <SearchBar handleStokedToggle={handleStokedToggle} searchProduct={searchProduct} />
            <ProductTable products={filteredProducts} />
        </div>
    )
}