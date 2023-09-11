import { Col, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";
import "./style.css";
import SideBar from "./sideBar/SideBar";
import LocationNav from "./locationNav/LocationNav";

function LocationAndContact() {
    return (
        <div className="loc_main">
            <Row className="">
                <Col className="col-3">
                    <SideBar />
                </Col>
                <Col className="col-9 loc_main-box">
                    <LocationNav />
                    <Row>
                        <Col md="6">
                            <h5>Регистрация компании</h5>
                            <h3>Адреса и контакты</h3>
                            <Form>
                                <FormGroup className="mt-5" floating>
                                    <Input
                                        id="exampleAdres"
                                        placeholder="Адрес"
                                        type="text"
                                    />
                                    <Label for="exampleAdres">
                                        Адрес
                                    </Label>
                                    <FormText className="ms-1">Укажите адрес на карте</FormText>
                                </FormGroup>
                                <FormGroup className="mt-4" floating>
                                    <Input
                                        id="exampleAdresTwo"
                                        placeholder="Уточнения адреса"
                                        type="text"
                                    />
                                    <Label for="exampleAdresTwo">
                                        Уточнения адреса
                                    </Label>
                                    <FormText className="ms-1">Например: вход слева от красных ворот</FormText>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md="6">dsgfd</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default LocationAndContact;