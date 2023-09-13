import { Col, Form, FormGroup, FormText, Input, Label, Row } from "reactstrap";
import "./style.css";
import SideBar from "./sideBar/SideBar";
import LocationNav from "./locationNav/LocationNav";
import { useState } from "react";
import { Icon } from '@iconify/react';
import ContinueBtn from "./continueBtn/ContinueBtn";

function LocationAndContact() {

    const [plusNumbers, setPlusNumbers] = useState(false);
    const [switches, setSwitches] = useState(false);

    const isOpenNumber = () => setPlusNumbers(!plusNumbers);
    const openSwitches = () => setSwitches(!switches);

    return (
        <div className="loc_main">
            <Row>
                <Col className="col-2">
                    <SideBar />
                </Col>
                <Col className="col-10 loc_main-box">
                    <LocationNav />
                    <Row>
                        <Col md="6" className="ps-5 pe-5">
                            <h5>Регистрация компании</h5>
                            <h3>Адреса и контакты</h3>
                            <Form>
                                <FormGroup className="mt-4">
                                    <Input
                                        className="loc_main-input"
                                        id="exampleAdres"
                                        placeholder="Адрес"
                                        type="text"
                                    />
                                    {/* <Label for="exampleAdres">
                                        Адрес
                                    </Label> */}
                                    <FormText className="loc_main-text">Укажите адрес на карте</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        className="loc_main-input"
                                        id="exampleAdresTwo"
                                        placeholder="Уточнения адреса"
                                        type="text"
                                    />
                                    {/* <Label for="exampleAdresTwo">
                                        Уточнения адреса
                                    </Label> */}
                                    <FormText className="loc_main-text">Например: вход слева от красных ворот</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        className="loc_main-input"
                                        id="exampleAdresKomp"
                                        placeholder="Название филиала"
                                        type="text"
                                    />
                                    {/* <Label for="exampleAdresKomp">
                                        Название филиала
                                    </Label> */}
                                    <FormText className="loc_main-text">Выберете удобное для вас название, его увидят только менеджеры компании</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        className="loc_main-input"
                                        id="exampleNumber"
                                        placeholder="Номер телефона"
                                        type="number"
                                    />
                                    {/* <Label for="exampleNumber">
                                        Номер телефона
                                    </Label> */}
                                    <FormText className="loc_main-text">Выберете удобное для вас название, его увидят только менеджеры компании</FormText>
                                </FormGroup>

                                {plusNumbers && plusNumbers
                                    ? <FormGroup>
                                        <Input
                                            className="loc_main-input"
                                            id="exampleNumberTwo"
                                            placeholder="Добавьте номер телефона еще раз"
                                            type="number"
                                        />
                                        {/* <Label for="exampleNumberTwo">
                                            Добавьте номер телефона еще раз
                                        </Label> */}
                                        <FormText className="loc_main-text">Выберете удобное для вас название, его увидят только менеджеры компании</FormText>
                                    </FormGroup>
                                    : ""
                                }
                                <p onClick={isOpenNumber} className="loc_plus-par">Добавить Номер телефона</p>
                            </Form>

                            <p className="loc_work">Режим работы</p>
                            <FormGroup switch>
                                <Input
                                    className="py-2"
                                    id="switches"
                                    type="switch"
                                    checked={switches}
                                    onClick={() => {
                                        setSwitches(!switches);
                                        openSwitches();
                                    }}
                                />
                                <Label check for="switches">Круглосуточно</Label>
                            </FormGroup>

                            {switches && switches
                                ? <Row>
                                    <Col className="loc_main-watches g-4 me-2 ms-2 text-center">
                                        <p className="mt-2 mb-2 loc_main-watch">пн</p>
                                        <p>09:00</p>
                                        <p style={{ color: "#85858791" }}><Icon icon="tabler:point-filled" /></p>
                                        <p className="mt-2 mb-2">18:00</p>
                                    </Col>
                                    <Col className="loc_main-watches g-4 me-2 text-center">
                                        <p className="mt-2 mb-2 loc_main-watch">вт</p>
                                        <p>09:00</p>
                                        <p style={{ color: "#85858791" }}><Icon icon="tabler:point-filled" /></p>
                                        <p className="mt-2 mb-2">18:00</p>
                                    </Col>
                                    <Col className="loc_main-watches g-4 me-2 text-center">
                                        <p className="mt-2 mb-2 loc_main-watch">ср</p>
                                        <p>09:00</p>
                                        <p style={{ color: "#85858791" }}><Icon icon="tabler:point-filled" /></p>
                                        <p className="mt-2 mb-2">18:00</p>
                                    </Col>
                                    <Col className="loc_main-watches g-4 me-2 text-center">
                                        <p className="mt-2 mb-2 loc_main-watch">чт</p>
                                        <p>09:00</p>
                                        <p style={{ color: "#85858791" }}><Icon icon="tabler:point-filled" /></p>
                                        <p className="mt-2 mb-2">18:00</p>
                                    </Col>
                                    <Col className="loc_main-watches g-4 me-2 text-center">
                                        <p className="mt-2 mb-2 loc_main-watch">пт</p>
                                        <p>09:00</p>
                                        <p style={{ color: "#85858791" }}><Icon icon="tabler:point-filled" /></p>
                                        <p className="mt-2 mb-2">18:00</p>
                                    </Col>
                                    <Col className="loc_main-watches g-4 me-2 text-center">
                                        <p className="mt-2 mb-2 loc_main-watch">сб</p>
                                        <p>09:00</p>
                                        <p style={{ color: "#85858791" }}><Icon icon="tabler:point-filled" /></p>
                                        <p className="mt-2 mb-2">18:00</p>
                                    </Col>
                                    <Col className="loc_main-watches g-4 me-2 text-center">
                                        <p className="mt-2 mb-2 loc_main-watch">вс</p>
                                        <p style={{ color: "#85858791", marginTop: "1.9rem" }}><Icon icon="tabler:sun" /></p>
                                    </Col>
                                </Row>
                                : ""
                            }

                            <ContinueBtn />
                        </Col>
                        <Col md="6" className="mt-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d95901.41990287435!2d69.2518912!3d41.3106176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m1!2z0YPQuy4g0JTQttCw0LzQuCwgNSAo0LrRgNGD0LMg0JTQttCw0LzQuCkgMTAwMDU3INCi0LDRiNC60LXQvdGCIFVa!4m5!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvnNoa2VudA!3m2!1d41.299495799999995!2d69.2400734!5e0!3m2!1suz!2s!4v1694541826960!5m2!1suz!2s"
                                style={{ width: "93%", height: "87vh", border: "none" }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default LocationAndContact;