import "./styleSideBar.css";
import imgLogo from "../img/logo.png";

function SideBar() {
    return (
        <>
            <img src={imgLogo} alt="img" className="w-50 ms-4 mt-4" />
            <p className="loc_contact mt-5">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                </span>
                Язык и часовой пояс
            </p>
            <p className="loc_contact mt-5">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                </span>
                Информация о компании
            </p>
            <p className="loc_contact loc_contactNum mt-5">
                <span>3</span>
                Адреса и контакты
            </p>
            <p className="loc_contact loc_contactNum mt-5">
                <span>4</span>
                Бонусная программа
            </p>
        </>
    );
}

export default SideBar;