import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import FormCreateProduct from "./components/FormCreateProduct";
import axios from "axios";

// baru dimenit 44.09
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://127.0.0.1:3001/products");
      setProducts([...response.data]);
    };
    fetchProducts();
  }, []);
  const getCreateProduct = async (product) => {
    const response = await axios.post("http://127.0.0.1:3001/products", product);
    setProducts([...products, response.data]);
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
