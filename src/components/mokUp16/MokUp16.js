import React from 'react'
import "./mokUp16.css"
import { mockup12 } from '../assets'
import Sidebar from '../sidebar/Sidebar'
import { Input, Label } from 'reactstrap'

function MokUp16() {
  return (
    <div className='ps-5 w-100'>
      <Sidebar />
      {/* <section className="Dashboard_Text"> */}
      <h5 className='float-start ms-5'><b>KPI</b></h5>
      
      <button className="continue_btn float-end me-5">
        Филтр
      </button>
      
     
      <div className=" mt-5 w-100">
      <div>
      <ul class="nav nav-underline pt-5">
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Рейтинг </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-4 text-dark" aria-disabled="true">Таблица</a>
        </li>
      </ul>
      <div className='form-floating mokUp16-login ms-5'>
        <Input className='mokUp16-login-input' id="floatName" placeholder='Имя' />
        <Label for="floatName">Месяц</Label>
      </div>
      <div className='form-floating mokUp16-login ms-5'>
        <Input className='mokUp16-login-input' id="floatName" placeholder='Имя' />
        <Label for="floatName">Тип</Label>
      </div>
      </div>
        <figure class="figure mokUp16-body">
          <img class="figure-img img-fluid " src={mockup12} alt="" />
          <figcaption class="figure-caption ms-5">На данный момент у вас не одного операции</figcaption>
        </figure>
      </div>
      {/* </section> */}
    </div>
  )
}

export default MokUp16