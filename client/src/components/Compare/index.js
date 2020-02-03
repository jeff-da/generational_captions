import React from 'react'
import './styles.css'

const Compare = ({products}) =>
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            {products.map(product =>
              <th key={product.id}>
                {product.inference}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>;

export default Compare
