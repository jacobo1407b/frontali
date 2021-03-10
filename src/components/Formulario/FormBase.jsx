import React from "react";
import { Form,Card,CardBody } from "reactstrap";

const FormBase = ({ title, children }) => {
  return (
    <Card className="card-pregunta">
      <CardBody>
        <Form>
          <h5>{title}</h5>
          {children}
        </Form>
      </CardBody>
    </Card>
  );
};

export default FormBase;
//title
