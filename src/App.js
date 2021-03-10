import { Container, Row, Col } from "reactstrap";
import CardCustom from "./components/CardCustom/CardCustom";
import { ContextData } from "./context/context";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ContextData>
      <SnackbarProvider maxSnack={3}>
        <Container>
          <Row />
          <Row>
            <Col sm={{ size: "auto", offset: 2 }}>
              <CardCustom />
            </Col>
          </Row>
        </Container>
      </SnackbarProvider>
    </ContextData>
  );
}

export default App;
