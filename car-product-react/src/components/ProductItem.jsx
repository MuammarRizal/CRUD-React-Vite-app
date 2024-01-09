import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdModeEdit } from "react-icons/md";

import { MdDeleteForever } from "react-icons/md";
import EditProduct from "./EditProduct";

function ProductItem(props) {
  const { nama, deskripsi, imageURL, id, onDeleteProduct, onEditProduct } = props;
  const [editProduct, setEditProduct] = useState(false);
  const onClickSetProduct = () => {
    setEditProduct(!editProduct);
  };
  const [jumlahProduct, setJumlahProduct] = useState(0);
  const tambahProduct = () => {
    setJumlahProduct(jumlahProduct + 1);
  };

  const kurangProduct = () => {
    setJumlahProduct(jumlahProduct - 1);
  };

  const onHandleDelete = () => {
    onDeleteProduct(id);
  };

  return (
    <Col>
      <Card>
        <div className="button-klik">
          <MdModeEdit className="p-en bg-r" onClick={onClickSetProduct} />
          <MdDeleteForever className="p-en bg-i" onClick={onHandleDelete} />
        </div>
        {editProduct ? (
          <EditProduct nama={nama} deskripsi={deskripsi} imageURL={imageURL} id={id} onClickSetProduct={onClickSetProduct} onEditProduct={onEditProduct} />
        ) : (
          <>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
              <Card.Title>{nama}</Card.Title>
              <Card.Text>{deskripsi}</Card.Text>
              <div className="keranjang-product">
                {jumlahProduct > 0 ? (
                  <>
                    <Button variant="primary" onClick={() => tambahProduct()}>
                      +
                    </Button>
                    <div className="keranjang">{jumlahProduct}</div>
                    <Button variant="primary" onClick={() => kurangProduct()}>
                      -
                    </Button>
                  </>
                ) : (
                  <div className="btn btn-primary" onClick={tambahProduct}>
                    +Keranjang
                  </div>
                )}
              </div>
            </Card.Body>
          </>
        )}
      </Card>
    </Col>
  );
}

export default ProductItem;
