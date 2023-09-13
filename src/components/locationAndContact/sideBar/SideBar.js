import "./styleSideBar.css";
import imgLogo from "../img/logo.png";
import { Icon } from "@iconify/react";

function SideBar() {
    return (
        <>
            <img src={imgLogo} alt="img" className="mt-4 mb-4"
                style={{ cursor: "pointer", width: "70%", height: "5rem" }} />
            <p className="loc_contact">
                <span>
                    <Icon icon="ri:check-line" />
                </span>
                Язык и часовой пояс
            </p>
            <p className="loc_contact">
                <span>
                    <Icon icon="ri:check-line" />
                </span>
                Информация о компании
            </p>
            <p className="loc_contact loc_contactNum">
                <span>3</span>
                Адреса и контакты
            </p>
            <p className="loc_contact loc_contactNum">
                <span>4</span>
                Бонусная программа
            </p>
        </>
    );
}

export default SideBar;