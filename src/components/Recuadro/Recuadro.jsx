import React from "react";
import { CardBody, Col } from "reactstrap";

const Recuadro = ({cls,children}) => {
  return (
    <CardBody className={cls}>
        <Col xs="5" sm="9">
            {children}
        </Col>
    </CardBody>
  );
};

export default Recuadro;
