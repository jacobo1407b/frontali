import React from 'react';
import {FormContacto,FormFecha,FormName} from './Formulario'
import FormBase from './Formulario/FormBase';
import Avatar from "@material-ui/core/Avatar";
import {  Row, Col } from "reactstrap";
import {useStylesAvatar} from '../assets/style'
import Recuadro from './Recuadro/Recuadro'
import {Nombres,Fechas,Contactos} from './Recuadro/ComponentCuadro'
const arrayChat = [
    {
      title: "¿Cual es tu nombre?",
      children: <FormName />,
      cuadro:<Nombres/>
    },
    {
      title: "¿Cual es tu fecha de nacimiento?",
      children: <FormFecha />,
      cuadro:<Fechas/>
    },
    {
      title: "Datos de contacto",
      children: <FormContacto />,
      cuadro:<Contactos/>
    },
  ];

const ArrayChat = () => {
    const classes = useStylesAvatar();
    return (
        <div>
            {arrayChat.map((poste, i) => (
              <div key={i}>
                <Row>
                  <Col xs="2" sm="2">
                    <Avatar
                      className={classes.large}
                      alt="Cindy Baker"
                      src="https://material-ui.com/static/images/avatar/2.jpg"
                    />
                  </Col>
                  <Col>
                    <FormBase title={poste.title} children={poste.children} />
                  </Col>
                </Row>
                <br />
                <Recuadro cls="card-header-custom">
                    {poste.cuadro}
                </Recuadro>
                <br />
              </div>
            ))}
        </div>
    )
}

export default ArrayChat
