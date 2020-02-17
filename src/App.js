import React from 'react';
import axios from 'axios';

import './App.css'

function Title(props) {
  return (
    <h1>{props.name}</h1>
  )
}

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div class="product-thumbnail">
        <img
          src={props.item.product_image}
          style={{ maxWidth: '100%' }}
          alt={props.item.product_image}
        />
      </div>
      <span className="product-name">{props.item.product_name}</span>
      <div className="product-description">
        {props.item.product_detail}
      </div>
      <div className="product-price">
        ฿{props.item.price}
      </div>
      <button className="btn btn-success">Buy</button>
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

  componentDidMount = () => {
    axios.get(
      'https://dry-scrubland-02499.herokuapp.com/api/v1/products'
    ).then((response) => {
      console.log('response data', response)
      this.setState({
        products: response.data
      })
    })
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
