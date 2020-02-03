import React from 'react'
import './styles.css'

const Product = ({product, compare}) =>
    <div key={product.id} className="col-sm-6 col-md-3">
        <div className={"product " + (product.compare ? "compare" : "")} >
            <img src={product.image} />
            <div className="image_overlay" onClick={() => compare(product)}>
            </div>
        </div>
    </div>;

export default Product
