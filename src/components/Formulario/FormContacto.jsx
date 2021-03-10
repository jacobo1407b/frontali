import React, { useContext,useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { DataContext } from "../../context/context";
import {validateEmail} from '../../utils/validacion'

export const FormContacto = () => {
  const { globalData, setGlobalData } = useContext(DataContext);
  const [valid, setValid] = useState(false)

  const handlerChange = (e) => {
    const { name, value } = e.target;
    if(!validateEmail(value) && name==="email"){
      setValid(true)
    }else{
      setValid(false)
    }
    setGlobalData({
      ...globalData,
      [name]: value,
    });
  };

  return (
    <div onChange={handlerChange}>
      <FormGroup>
        <Input 
        invalid={valid}
        placeholder="Correo electronico"
         name="email" />
      </FormGroup>

      <FormGroup className="position-relative">
        <Input
         placeholder="Telefono celular"
         name="telefono"
          />
      </FormGroup>
    </div>
  );
};
