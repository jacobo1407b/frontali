import React, { useContext, useState } from "react";
import { Card, CardBody, Container } from "reactstrap";
import { useSnackbar } from 'notistack';
import { Spinner } from 'reactstrap';
import { ButtonToggle } from "reactstrap";
import CardHeader from "./HeaderCard";
import Recuadro from "../Recuadro/Recuadro";
import ArrayChat from "../ArrayChat";
import { useMutation  } from '@apollo/client';
import { DataContext } from "../../context/context";
import {ADD_PEOPLE } from '../../apollo/mutation'


const CardCustom = () => {

  const { globalData } = useContext(DataContext);
  const { enqueueSnackbar } = useSnackbar();
  const {nombre,nombreDos,apellido,apellidoMa,telefono,email} = globalData
  const {dia,mes,anio} = globalData
  const [createPeople] = useMutation(ADD_PEOPLE );
  const [dataPeople, setDataPeople] = useState(null)
  const [loading, setLoading] = useState(false)


  const handlerSubmit = () => {
    if(!nombre || !apellido || !apellidoMa || !telefono || !email || !dia || !mes || !anio){
      enqueueSnackbar("Complete los campos",{variant:"error"});
    }else{
      setLoading(true)
      createPeople({ variables:{input:{
        nombre,
        nombreDos,
        apellido,
        apellidoMa,
        telefono,
        email,
        fecha:`${dia} ${mes} ${anio}`
      }} })
      .then(response=>{
        localStorage.setItem('data', JSON.stringify(globalData))
        setDataPeople(response.data?.createPeople)
        enqueueSnackbar("Datos enviados",{variant:"success"});
        setLoading(false)
  
      })
      .catch(err=>{
        enqueueSnackbar("Error del servidor",{variant:"error"});
        setLoading(false)
      })
    }
  };

  return (
    <div>
      <Card>
        <CardHeader />
        <CardBody className="card-body-custom">
          <Container>
            <ArrayChat />
            <Recuadro cls="card-pregunta">
              <h6 style={{ fontSize: "12px" }}>
                Si tus datos son correctos por favor continuemos
              </h6>
            </Recuadro>
          </Container>
          <br />
          <ButtonToggle
            block
            size="lg"
            className="color-buton-custom"
            onClick={handlerSubmit}
            
          >
            {loading?(
               <Spinner color="light" />
            ):(
              <div>Iniciar</div>
            )}
            
          </ButtonToggle>
          <br />
          {dataPeople && (
            <Recuadro cls="card-header-custom">
              <h6 style={{fontSize:"14px"}}>Fecha de nacimiento: {dataPeople?.fecha}</h6>
              <h6 style={{fontSize:"14px"}}>Correo electronico: {dataPeople?.email}</h6>
              <h6 style={{fontSize:"14px"}}>Telefono celular: {dataPeople?.telefono}</h6>
              <h6 style={{fontSize:"14px"}}>Nombre: {dataPeople?.nombre} {dataPeople?.apellido}</h6>
            </Recuadro>
          )}
          
        </CardBody>
      </Card>
    </div>
  );
};

export default CardCustom;
