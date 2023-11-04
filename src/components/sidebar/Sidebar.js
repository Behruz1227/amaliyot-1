import React, { useEffect } from 'react'
import "./sidebar.css"
import { bell, cellular, file, happy, heart, help, oval, photo, schedule, setting, up, ura } from '../assets';

function Sidebar() {
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar_menu");
    let closeBtn = document.querySelector("#Button");
    closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    });
    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bxs-x-circle");
      } else {
        closeBtn.classList.replace("bxs-x-circle", "bx-menu");
      }
    }
  }, []);

  return (
    <>
      <div className="sidebar_menu ">
        <div className="Logo">
          <i className="bx bxl-slack" />
          <div><img className="Text_Logo icon" src={ura} alt="." id="Button" /></div>
          <i className="bx bx-menu" />
        </div>
        <ul className="Nav_Item">
          <li className='logo-detail'>
            <a href="#">
              <img src={oval} alt="." className='logo-img' />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={bell} alt="." className='img-fluid' />
              <span className="Item_Name">Bell</span>
            </a>
            <span className="Menu_btn">Bell</span>
          </li>
          <li>
            <a href="#">
              <img src={up} alt="." className='img-fluid' />
              <span className="Item_Name">Up</span>
            </a>
            <span className="Menu_btn">Up</span>
          </li>
          <li>
            <a href="#">
              <img src={setting} alt="." className='img-fluid' />
              <span className="Item_Name">Setting</span>
            </a>
            <span className="Menu_btn">Setting</span>
          </li>
          <li>
            <a href="#">
              <img src={schedule} alt="." className='img-fluid' />
              <span className="Item_Name">Schedule</span>
            </a>
            <span className="Menu_btn">Schedule</span>
          </li>
          <li>
            <a href="#">
              <img src={photo} alt="." className='img-fluid' />
              <span className="Item_Name">Photo</span>
            </a>
            <span className="Menu_btn">Photo</span>
          </li>
          <li>
            <a href="#">
              <img src={help} alt="." className='img-fluid' />
              <span className="Item_Name">Help</span>
            </a>
            <span className="Menu_btn">Help</span>
          </li>
          <li>
            <a href="#">
              <img src={happy} alt="." className='img-fluid' />
              <span className="Item_Name">Happy</span>
            </a>
            <span className="Menu_btn">Happy</span>
          </li>
          <li>
            <a href="#">
              <img src={heart} alt="." className='img-fluid' />
              <span className="Item_Name">Heart</span>
            </a>
            <span className="Menu_btn">Heart</span>
          </li>
          <li>
            <a href="#">
              <img src={file} alt="." className='img-fluid' />
              <span className="Item_Name">File</span>
            </a>
            <span className="Menu_btn">File</span>
          </li>
          <li>
            <a href="#">
              <img src={cellular} alt="." className='img-fluid' />
              <span className="Item_Name">Cellular</span>
            </a>
            <span className="Menu_btn">Cellular</span>
          </li>
        </ul>
      </div>
      
    </>

  )

}

export default Sidebar