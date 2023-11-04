import React from 'react'
import "./mokUp14.css"
import Sidebar from '../sidebar/Sidebar'
import { mockup12 } from '../assets'

function MockUp14() {
  return (
    <div className='ps-5 w-100'>
      <Sidebar />
      {/* <section className="Dashboard_Text"> */}
          <h5 className='float-start ms-5'><b>Источники траффика</b></h5>
          <button className="continue_btn float-end me-5">
            +
          </button>
      <div className=" mt-5 w-100">
        <figure class="figure mokUp14-body">
          <img class="figure-img img-fluid " src={mockup12} alt="" />
          <figcaption class="figure-caption ms-5">На данный момент у вас не одного операции</figcaption>
        </figure>
      </div>
      {/* </section> */}
    </div>
  )
}

export default MockUp14
