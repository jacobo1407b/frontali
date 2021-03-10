import React, { useState } from 'react'
const globalData= {
    nombre:"",
    nombreDos:"",
    apellido:"",
    apellidoMa:"",
    telefono:"",
    email:"",
    fecha:"",
    dia:"",
    mes:"",
    anio:""
}
export const DataContext = React.createContext({
  globalData: globalData,
  setGlobalData: () => {}
})

export const ContextData = (props) => {

  const setGlobalData = (data) => {
    setState({...state, globalData: data})
  }

  const initState = {
    globalData: globalData,
    setGlobalData: setGlobalData
  } 

  const [state, setState] = useState(initState)

  return (
    <DataContext.Provider value={state}>
      {props.children}
    </DataContext.Provider>
  )
}
