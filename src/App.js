import React from 'react';

import './App.css'

function Title(props) {
  return (
    <h1>{props.name}</h1>
  )
}

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.item.product_image} style={{ maxWidth: '100%' }} alt=""/>
      <span className="product-name">{props.item.product_name}</span>
      <div className="product-description">
        {props.item.product_detail}
      </div>
      <div className="product-price">
        ฿{props.item.price}
      </div>
      <button className="btn btn-success btn-lg">Buy</button>
    </div>
  )
}

class ProductList extends React.Component {
  state = {
    // key: value
    products: [
      {
        product_name: 'Oreo',
        product_detail: 'Biscuit. 112g',
        price: 270.00
      },
      {
        product_name: '3D Mask ผู้ใหญ่',
        product_detail: '3D Mask ผู้ใหญ่ บรรจุ 4 ชิ้น',
        price: 129.00
      },
      {
        product_name: 'กะเพรา',
        product_detail: 'กะเพรา 4 ต้น',
        price: 10.50
      },
      {
        product_name: 'Bar-B-Plaza E-Vouncher',
        product_detail: 'e-vouncher 100.-',
        price: 85.00
      },
    ],
    user: {
      name: 'Bas'
    }
  }

  render() {
    return (
      <div className="container px-0">
        <Title name={this.state.user.name} />
        <Title name="New Product!" />
        <ProductCard item={this.state.products[0]} />
        <Title name="Product list"/>
        <div className="product-list">
          {this.state.products.map(
            (product) => (
              <ProductCard key={product.id} item={product} />
            )
          )}
        </div>
      </div>
    )
  }
}

export default ProductList
