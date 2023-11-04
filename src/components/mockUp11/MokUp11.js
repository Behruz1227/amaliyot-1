import React from 'react'
import { afonse, nuqta, search } from '../assets'
import Pagination from '../mockUp13/Pagination'
import Sidebar from '../sidebar/Sidebar'
import "./mokUp11.css"
import M11List from './M11List'
import { Col, Input, Row } from 'reactstrap'

function MokUp11() {
  return (
    <div className='ps-5 row mokUp11-main pt-4 w-100'>
      <div className="col-9 mt-5">
        <Sidebar />
        <h4 className='float-start ms-5'>Клиенты</h4>
        <img className='float-end mt-3' src={nuqta} alt="" />
        <img className='float-end me-4 mt-2' src={search} alt="." />
        <button className="continue_btn float-end me-4">
          Филтр
        </button>
        <div className="mokUp11-body ms-5">
          <div className="w-100 row mokUp11-nav">
            <h5 className="col-3">Клиенты</h5>
            <h5 className="col-2">Рекомендации</h5>
            <h5 className="col-3">Отстаток баллов</h5>
            <h5 className="col-2">Оплачено, UZS</h5>
            <div class="col-2">
              <div class="form-check float-end">
                <input class="form-check-input float-end" type="checkbox" value="" id="flexCheckDefault" />
              </div>
              <svg className='ms-4 float-end' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4C0 1.79086 1.79086 0 4 0ZM4 2C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V4C18 2.89543 17.1046 2 16 2H4ZM5.70711 4.29289L6 4.58579L7.29289 3.29289C7.68342 2.90237 8.31658 2.90237 8.70711 3.29289C9.09763 3.68342 9.09763 4.31658 8.70711 4.70711L6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289ZM10.9988 6C10.4465 5.99931 9.99932 5.55104 10 4.99876C10.0007 4.44647 10.449 3.99932 11.0012 4L14.9826 4.00494C15.5348 4.00563 15.982 4.4539 15.9813 5.00619C15.9806 5.55847 15.5324 6.00563 14.9801 6.00494L10.9988 6ZM10.9988 11C10.4465 10.9993 9.99932 10.551 10 9.99876C10.0007 9.44647 10.449 8.99932 11.0012 9L14.9826 9.00494C15.5348 9.00563 15.982 9.4539 15.9813 10.0062C15.9806 10.5585 15.5324 11.0056 14.9801 11.0049L10.9988 11ZM10.9988 16C10.4465 15.9993 9.99932 15.551 10 14.9988C10.0007 14.4465 10.449 13.9993 11.0012 14L14.9826 14.0049C15.5348 14.0056 15.982 14.4539 15.9813 15.0062C15.9806 15.5585 15.5324 16.0056 14.9801 16.0049L10.9988 16ZM5.70711 9.29289L6 9.58579L7.29289 8.29289C7.68342 7.90237 8.31658 7.90237 8.70711 8.29289C9.09763 8.68342 9.09763 9.31658 8.70711 9.70711L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071L4.29289 10.7071C3.90237 10.3166 3.90237 9.68342 4.29289 9.29289C4.68342 8.90237 5.31658 8.90237 5.70711 9.29289ZM5.70711 14.2929L6 14.5858L7.29289 13.2929C7.68342 12.9024 8.31658 12.9024 8.70711 13.2929C9.09763 13.6834 9.09763 14.3166 8.70711 14.7071L6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071L4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929C4.68342 13.9024 5.31658 13.9024 5.70711 14.2929Z" fill="#92929D" />
              </svg>
            </div>
          </div>
          <Row className='form-group w-100 mt-3'>
          <Col className='col-10 '>
            <Input className='' />
          </Col>
          <Col className='col-2'>
            <button className="btn btn-outline-secondary float-end">Action</button>
          </Col>
          </Row>
    
          <M11List />
          <M11List />
          <M11List />
          <M11List />
          <M11List />
          <M11List />
          <M11List />
          <M11List />
        </div>
        <Pagination />
      </div>
      <div className="col-3 d-flex justify-content-center">
        <div className="mokUp11-col-2 mt-5">
          <h6>30.11.2019 | 00:49</h6>
          <div className='mokUp-col-2-box1 mt-3'>
            <svg className='mb-4 me-2' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#3DD598" />
              <path d="M16.8108 15.1541H15.1892C14.2654 15.1541 13.5138 14.3142 13.5138 13.282C13.5138 12.2496 14.2654 11.4098 15.1892 11.4098H18.4323C18.8504 11.4098 19.1893 11.0311 19.1893 10.5639C19.1893 10.0968 18.8504 9.71804 18.4323 9.71804H16.7569V7.84586C16.7569 7.37872 16.418 7 16 7C15.582 7 15.2431 7.37872 15.2431 7.84586V9.71804H15.1893C13.4307 9.71804 12 11.3168 12 13.282C12 15.2471 13.4307 16.8458 15.1893 16.8458H16.8108C17.7346 16.8458 18.4862 17.6857 18.4862 18.718C18.4862 19.7503 17.7346 20.5902 16.8108 20.5902H13.5677C13.1497 20.5902 12.8108 20.9689 12.8108 21.436C12.8108 21.9032 13.1497 22.2819 13.5677 22.2819H15.2431V24.1541C15.2431 24.6213 15.582 25 16 25C16.418 25 16.7569 24.6213 16.7569 24.1541V22.2819H16.8108C18.5693 22.2819 20 20.6831 20 18.718C20 16.7529 18.5693 15.1541 16.8108 15.1541Z" fill="white" />
            </svg>
            <p className='d-inline-block'><b>Операция 111345785</b><br />Стандартная операция</p>
            <p>Общий счет</p>
            <p>300 Баллы <br /> 23 000 UZS</p>
            <div>
              <img className='d-inline-block' src={afonse} alt="." />
              <p className='d-inline-block ms-3'>Caspar Sawrey</p>
              <p>Кассир</p>
              <button className='btn btn-outline-primary rounded-5 ms-4'>Возврат по операции</button>
              <button className='btn btn-outline-danger rounded-5 mt-4'>Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MokUp11