import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";

function FormCreateProduct({ getCreateProduct }) {
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };

  const [addProduct, setAddProduct] = useState(initialState);
  const { nama, deskripsi, imageURL } = addProduct;
  const [toggleBtn, setToggleBtn] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    getCreateProduct(addProduct);
    setAddProduct(initialState);
  };

  const onHandleAdd = (e) => {
    setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
  };

  const onToggle = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <div className={"container-fluid"}>
      <div className={`show-create-toggle d-flex justify-content-end ${!toggleBtn ? "mb-3" : ""}`}>
        <button className=" ms-auto" onClick={onToggle}>
          {!toggleBtn ? <RxEyeClosed className="tr" /> : <IoEyeOutline className="tr" />}
        </button>
      </div>
      {toggleBtn && (
        <Form className="my-4" onSubmit={onFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama Product</Form.Label>
            <Form.Control type="text" placeholder="Nama Mobil" name="nama" onChange={onHandleAdd} value={nama} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Deskripsi Product</Form.Label>
            <Form.Control type="text" placeholder="Deskripsi Mobil" name="deskripsi" onChange={onHandleAdd} value={deskripsi} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="URL GAMBAR" name="imageURL" onChange={onHandleAdd} value={imageURL} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}

export default FormCreateProduct;
