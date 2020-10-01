import React from 'react'
import ProductRow from '../ProductRow/ProductRow'


export default function ProductTable({ products }) {
    return (
        <div>
            {products.data.map((product) => {
                return <ProductRow  key={product.id} name={product.name} price={product.price} />
            })}
        </div>
    )
}
