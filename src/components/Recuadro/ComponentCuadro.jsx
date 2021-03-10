import React,{useContext}from 'react';
import {DataContext} from '../../context/context';


export function Nombres(){
    const { globalData } = useContext(DataContext);
    const {nombre,nombreDos,apellido,apellidoMa} = globalData
    return (
        <div>
            <h6 style={{fontSize:"15px"}}>
                {nombre} {nombreDos} {apellido} {apellidoMa}
            </h6>
        </div>
    )

}
export function Fechas(){
    const { globalData } = useContext(DataContext);
    const {dia,mes,anio} = globalData
    return (
        <div>
            <h6 style={{fontSize:"15px"}}>{dia} {mes} {anio}</h6>
        </div>
    )

}

export function Contactos(){
    const { globalData } = useContext(DataContext);
    const {telefono,email} = globalData
    return (
        <div>
            <h6 style={{fontSize:"12px"}}>Correo electronico: {email}</h6>
            <h6 style={{fontSize:"12px"}}>Telefono celular: {telefono}</h6>
        </div>
    )

}
export function GeneralInfo (){
    //const { globalData } = useContext(DataContext);
    return (
        <div>
            <h6 style={{fontSize:"12px"}}>Correo electronico: </h6>
            <h6 style={{fontSize:"12px"}}>Telefono celular: </h6>
        </div>
    )
}