import { QRCodeCanvas } from 'qrcode.react';
import Sidebar from '../sidebar/Sidebar'
import { Col, Row } from 'reactstrap';
import "./mokUp15.css"

function MokUp15() {

  const qr = [
    {
      value: "ccfu4968",
      price: 299600,
      income: 2,
      count: 3
    },
    {
      value: "ccfu4968",
      price: 299600,
      income: 2,
      count: 3
    },
    {
      value: "ccfu4968",
      price: 299600,
      income: 2,
      count: 3
    },
    {
      value: "ccfu4968",
      price: 299600,
      income: 2,
      count: 3
    },
    {
      value: "ccfu4968",
      price: 299600,
      income: 2,
      count: 3
    }
  ]


  return (
    <div className='ps-5 float-end mokUp15-main'>
      <div className='mt-5'>
        <Sidebar />
        <h5 className='float-start ms-5'><b>Источники траффика</b></h5>
        <button className="continue_btn float-end me-5">
          + Создать
        </button>
      </div>
      <Row className='w-100 g-3'>
        {qr.map((item, i) =>
          <Col key={i} className='col-6 qr-box'>
            <div className='qr-box-2'>
              <Row>
                <Col className='col-3'>
                  <QRCodeCanvas value={item.value} />
                </Col>
                <Col className='col-6'>
                  <h6 className='mpkUp15-h6'><b>{item.value}</b></h6>
                  <p>Выручка, UZS: <b> {item.income}</b></p>
                  <p>Совершили покупки: <b> {item.price}</b></p>
                  <p>Клиенты: <b> {item.count}</b></p>
                </Col>
                <Col>
                  <button className='btn btn-outline-secondary qr-btn rounded-5'>Редактировать</button>
                </Col>
              </Row>
            </div>

          </Col>
        )}
      </Row>
      <div className="mt-5 w-100">
      </div>
    </div>
  )
}

export default MokUp15