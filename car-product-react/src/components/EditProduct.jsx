import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function EditProduct(props) {
  const { onEditProduct, nama, deskripsi, imageURL, id, onClickSetProduct } = props;
  const initialState = {
    id: id,
    nama: nama,
    deskripsi: deskripsi,
    imageURL: imageURL,
  };

  const [editForm, setEditForm] = useState(initialState);

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  const formHandle = (e) => {
    e.preventDefault();
    onClickSetProduct();
    onEditProduct(id, editForm);
  };
  return (
    <div className="p-3">
      <Form className="my-4" onSubmit={formHandle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nama Product</Form.Label>
          <Form.Control type="text" value={editForm.nama} name="nama" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Deskripsi Product</Form.Label>
          <Form.Control type="text" value={editForm.deskripsi} name="deskripsi" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" value={editForm.imageURL} name="imageURL" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" className="me-3">
          Save
        </Button>
        <Button variant="danger" onClick={onClickSetProduct}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default EditProduct;
