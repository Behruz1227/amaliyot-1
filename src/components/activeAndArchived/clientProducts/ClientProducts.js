import "./clientProducts.css";
import NewsAndSearch from "../newsAndSearch/NewsAndSearch";
import Sidebar from "../../sidebar/Sidebar";
import { clientProduct } from "./clientInfo";
import { Col, Pagination, PaginationItem, PaginationLink, Row } from "reactstrap";
import { useState } from "react";
// import LocationNav from "../../locationAndContact/locationNav/LocationNav";

function ClientProducts() {

    const [startIndex, setStartIndex] = useState(0);

    const generateClints = (startIndex) => {
        const elementsClient = [];
        for (let i = startIndex; i < startIndex + 10 && i < 21; i++) {
            elementsClient.push(
                <Col md="6" className="d-inline-block" key={i} >
                    <div className="client_products-info">
                        <Row>
                            <Col className="col-3">
                                <img className="img-fluid" src={clientProduct.image} alt="img" />
                            </Col>
                            <Col className="col-9 ms-0 ps-0">
                                <h4>{clientProduct.info}</h4>
                                <p>{clientProduct.date}</p>
                                <button>{clientProduct.edit}</button>
                                <button className="ms-4">{clientProduct.addPush}</button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            )
        }
        return elementsClient;
    };

    const handleNextClick = () => {
        setStartIndex(startIndex + 10);
    };

    const handlePreviousClick = () => {
        setStartIndex(startIndex - 10);
    };

    return (
        <div className="client_products">

            {/* <LocationNav /> */}

            <Sidebar />     {/* sidebar */}
            <NewsAndSearch />

            <div className="mt-2">
                {generateClints(startIndex)}
            </div>
            <Pagination>
                <PaginationItem>
                    <PaginationLink onClick={() => handlePreviousClick()} disabled={startIndex === 0} first />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>...</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>21</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => handleNextClick()} disabled={startIndex + 10 >= 21} last />
                </PaginationItem>
            </Pagination>
        </div>
    );
}

export default ClientProducts;