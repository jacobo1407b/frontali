import React, { useContext } from "react";
import { FormGroup, Input } from "reactstrap";
import { DataContext } from "../../context/context";

export const FormName = () => {
  const { globalData, setGlobalData } = useContext(DataContext);
  

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setGlobalData({
      ...globalData,
      [name]: value,
    });
  };
  return (
    <div onChange={handlerChange}>
      <FormGroup>
        <Input placeholder="Nombre" name="nombre" />
      </FormGroup>

      <FormGroup className="position-relative">
        <Input placeholder="Segundo nombre" name="nombreDos" />
      </FormGroup>
      <FormGroup className="position-relative">
        <Input placeholder="Apellido paterno" name="apellido" />
      </FormGroup>

      <FormGroup className="position-relative">
        <Input  placeholder="Apellido materno" name="apellidoMa" />
      </FormGroup>
    </div>
  );
};
