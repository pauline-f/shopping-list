import React, { useEffect } from 'react';

function Product(props) {

    useEffect(() => {
        fetch('/api/product')
            .then(res => res.json())
            .then(list => props.setListProduct(list));
    }, []);

    return (
        <ul>
            {props.listProduct.map(product => <li>{product}</li>)}
        </ul>
    )
}

export default Product;