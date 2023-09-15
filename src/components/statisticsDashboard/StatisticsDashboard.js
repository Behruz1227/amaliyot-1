import "./style.css";
import { category, product } from "./statisticJson/statisticJson";
import { Button, Col, Row } from "reactstrap";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LineElement,
    LinearScale,
    PointElement
} from "chart.js";
import { Icon } from "@iconify/react";
import Sidebar from "../sidebar/Sidebar";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function StatisticsDashboard() {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            data: [370, 397, 390, 450, 525, 440, 435, 650, 600, 550, 420, 430],
            backgroundColor: "transparent",
            borderColor: "green",
            pointBorderColor: "transparent",
            pointBorderWidth: 4,
            tension: .6
        }],
        // datasetss: [{
        //     data: [470, 400, 200, 230, 400, 500, 490, 700, 680, 600, 400, 420],
        // }]
    };

    const options = {
        plugins: {
            legend: false
        },
        scales: {
            y: {
                grid: {
                    display: false
                },
                min: 0,
                max: 1000,
                ticks: {
                    stepSize: 200
                },
            }
        }
    };

    return (
        <div className="statistics_main">

            {/* sidebar */}
            <Sidebar />

            <div className="statistic_btn mb-2">
                <span className="statistic_par">Статистика</span>
                <Button color="primary" className="statistic_btn-filter rounded-5 px-4">Филтр</Button>
                <span className="clear-both"></span>
            </div>

            <div className="statistic_category">
                {category && category.map((item, i) =>
                    <span key={i}>{item.btn}</span>
                )}
            </div>

            <Row className="w-100 mt-3 pt-2">
                {product && product.map((item, i) =>
                    <div key={i} className="p-2 col-3">
                        <div className="statistics_product">
                            <Row>
                                <Col className="col-3">
                                    <img src={item.img} alt="downloadImg" />
                                </Col>
                                <Col className="col-9">
                                    <p className="statistic_product-num">{item.number}</p>
                                    <p>{item.client}</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )}
            </Row>

            <p className="diagramma_head">Количество новых клиентов</p>

            {/* diagramma */}
            <div className="statistics_diagramma">
                <div>
                    <p className="fw-bolder">Sales Figures</p>
                    <p>
                        <span className="me-2">
                            <Icon className="text-success fs-5" icon="tabler:point-filled" />
                            Новые клиенты
                        </span>
                        <span>
                            <Icon className="text-primary fs-5" icon="tabler:point-filled" />
                            Старые клиенты
                        </span>
                    </p>
                </div>
                <Line className="statistic_diagramma" data={data} options={options}></Line>
            </div>

        </div>
    );
}

export default StatisticsDashboard;