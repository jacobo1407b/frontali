import React from "react";
import { CardBody, CardTitle, CardSubtitle, Row, Col } from "reactstrap";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

const HeaderCard = () => {
  return (
    <CardBody className="card-header-custom">
      <Row>
        <Col xs="1" sm="9">
          <CardTitle tag="h5">Recaudar datos</CardTitle>
        </Col>
        <Col xs="1" sm="2">
          <AssignmentTurnedInIcon style={{ color: "#fefbfc", fontSize: 80 }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CardSubtitle tag="h6" className="mb-2">
            <AccessAlarmIcon /> En menos de 5 minutos
          </CardSubtitle>
        </Col>
      </Row>
    </CardBody>
  );
};

export default HeaderCard;
