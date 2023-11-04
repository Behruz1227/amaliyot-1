import React from 'react'
import "./mokUp12.css"
import Sidebar from '../sidebar/Sidebar'
import { mockup12 } from '../assets'

function MockUp12() {
  return (
    <div className='ps-5 w-100'>
      <Sidebar />
      {/* <section className="Dashboard_Text"> */}
          <h4 className='float-start ms-5'>Операции</h4>
          <button className="continue_btn float-end me-5">
            Филтр
          </button>
      <div className=" mt-5 w-100">
        <figure class="figure mokUp12-body">
          <img class="figure-img img-fluid " src={mockup12} alt="" />
          <figcaption class="figure-caption ms-5">На данный момент у вас не одного операции</figcaption>
        </figure>
      </div>
      {/* </section> */}
    </div>
  )
}

export default MockUp12
