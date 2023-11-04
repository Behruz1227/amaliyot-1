import { Icon } from "@iconify/react";
import "./newsSearch.css";
import { Button } from "reactstrap";

function NewsAndSearch() {
    return (
        <>
            <div className="news_search">
                <p>
                    Новости
                    <span> 0 </span>
                </p>
                <span>
                    <Button color="primary" className="fw-medium rounded-5 me-3">
                        <Icon className="activearch_bg-icon" icon="akar-icons:plus" />
                        <span className="ms-2">Создать</span>
                    </Button>
                    <Icon className="search_btn" icon="mingcute:search-line" />
                    <span className="ms-3"><Icon className="search_btn" icon="solar:menu-dots-bold" /></span>
                </span>
            </div>

            <div className="active_archived">
                <p className="ps-2 pe-3">Активные</p>
                <p className="pe-2 ps-3">Архивированные</p>
            </div>
        </>
    );
}

export default NewsAndSearch;