import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Products } from "./data/product";
import FormCreateProduct from "./components/FormCreateProduct";

function App() {
  const [products, setProducts] = useState(Products);

  const getCreateProduct = (product) => {
    setProducts([...products, { id: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000), ...product }]);
  };

  const onEditProduct = (id, data) => {
    const updated = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...data };
      }
      return prod;
    });
    console.log(updated);
    setProducts(updated);
  };

  const onDeleteProduct = (id) => {
    const updatedProduct = products.filter((product) => product.id !== id);
    return setProducts(updatedProduct);
  };

  return (
    <div className="App">
      <Container>
        <h2 className="text-center my-4">PRODUCT MOBIL</h2>
        <FormCreateProduct getCreateProduct={getCreateProduct} />
        <Row>
          <ProductList products={products} onDeleteProduct={onDeleteProduct} onEditProduct={onEditProduct} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
