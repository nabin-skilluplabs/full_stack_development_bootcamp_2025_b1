import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export function ProductTable(props) {
    const products = props.products;
    const categories = [];
    products.forEach(product => {
        if(categories.indexOf(product.category) == -1){
            categories.push(product.category);
        }
    });

    return (
        <div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="p-2 border-b border-b-gray-300">Name</th>
                        <th className="p-2 border-b border-b-gray-300">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(category => (
                            <React.Fragment key={category}>
                                <ProductCategoryRow category={category} />
                                {
                                    products
                                    .filter(product => product.category === category)
                                    .map((product, index) => <ProductRow key={index} name={product.name} price={product.price} stocked={product.stocked} />)
                                }
                            </React.Fragment>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )
}