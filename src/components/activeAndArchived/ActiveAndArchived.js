import Sidebar from "../sidebar/Sidebar";
import NewsAndSearch from "./newsAndSearch/NewsAndSearch";
import "./style.css";
import bgImg from "./img/bgImg.jpg"
import { Icon } from "@iconify/react";
import { Button } from "reactstrap";

function ActiveAndArchived() {
    return (
        <div className="activearch_main">

            {/* sidebar */}
            <Sidebar />

            <NewsAndSearch />

            <div className="activearch_bg text-center">
                <img src={bgImg} alt="bgImg" />
                <h5>Вам не хватает только новостей</h5>
                <p>Новостей пока нет</p>
                <Button color="primary" className="fw-medium rounded-5 px-4 py-2">
                    <Icon className="activearch_bg-icon" icon="akar-icons:plus" />
                    <span className="ms-2">Создать</span>
                </Button>
            </div>
        </div>
    );
}

export default ActiveAndArchived;