import { Icon } from "@iconify/react";
import "./btnStyle.css";

function ContinueBtn() {
    return (
        <>
            <button className="continue_btn">
                <span className="me-2 fs-5"><Icon icon="ri:check-line" /></span>
                Продолжить
            </button>
        </>
    );
}

export default ContinueBtn;