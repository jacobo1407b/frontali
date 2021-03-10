import React,{useContext,useState} from "react";
import { FormGroup, Input } from "reactstrap";
import {DataContext} from '../../context/context'

export const FormFecha = () => {
  const { globalData, setGlobalData } = useContext(DataContext);

  const [invalid, setInvalid] = useState(false);


  const handlerChange=(e)=>{
    const {name,value} = e.target;
    if(name === "dia" && value>=31){
      setInvalid(true);
    }else{
      setInvalid(false);
      setGlobalData({
        ...globalData,
        [name]:value
      })
    }
    
  }


  return (
    <div onChange={handlerChange}>
      <FormGroup>
        <Input placeholder="Dia" maxLength={2} invalid={invalid} name="dia"/>
      </FormGroup>

      <FormGroup className="position-relative">
        <Input placeholder="Mes" maxLength={10} name="mes"/>
      </FormGroup>
      <FormGroup className="position-relative">
        <Input placeholder="Año" maxLength={4} name="anio"/>
      </FormGroup>
    </div>
  );
};

