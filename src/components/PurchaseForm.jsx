import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const PurchaseForm = () => {
  const initialValues = {
    email1: "",
    email2: "",
    name: "",
    lastName: "",
    phone: "",
  };
  const validationSchema = Yup.object().shape({
    email1: Yup.string()
      .email("El correo electrónico no es válido")
      .required("El correo es obligatorio"),
    email2: Yup.string()
      .oneOf(
        [Yup.ref("email1"), null],
        "Los correos electrónicos deben coincidir"
      )
      .required("Debes confirmar el correo"),
    name: Yup.string().min(2).required("Nombre es obligatorio"),
    lastName: Yup.string().min(2).required("Apellido es obligatorio"),
    phone: Yup.string().min(6).required("Telefono es obligatorio"),
  });
  async function handleSubmit(e) {
    try {
      alert("formulario enviado");
    } catch (error) {}
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="mb-3">
          <label className="block font-medium">Correo Electrónico</label>
          <Field
            type="email"
            name="email1"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="email1"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="block font-medium">Confirme su Correo</label>
          <Field
            type="email"
            name="email2"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="email2"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="block font-medium">Nombre</label>
          <Field
            type="text"
            name="name"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="block font-medium">Apellido</label>
          <Field
            type="text"
            name="lastName"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>{" "}
        <div className="mb-3">
          <label className="block font-medium">Telefono</label>
          <Field
            type="phone"
            name="phone"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-red-500 text-sm"
          />

<button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
        </div>
      </Form>
    </Formik>
  );
};

export default PurchaseForm;
