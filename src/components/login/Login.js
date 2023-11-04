import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { loginBlog, logo } from '../assets';
import "./login.css"

function Login() {
  return (
    <div className='login-main'>
      <Row className='login-box'>
        <Col className='col-6 login-box-1'>
          <img className='login-logo' src={logo} alt="." />
          <img className='login-blog' src={loginBlog} alt="" />
          <p className="login-text">Мониторинг ваших продаж в любое время. Проще и эффективнее, чем раньше</p>
        </Col>
        <Col className='col-6 login-box-2'>
          <h3 className="login-h3">Создать аккаунт</h3>
          <div className='form-floating'>
            <Input className='login-input' id="floatName" placeholder='Имя' />
            <Label for="floatName">Имя</Label>
          </div>
          <div className='form-floating'>
            <Input className='login-input' id="floatName2" placeholder='Фамилия' />
            <Label for="floatName2">Фамилия</Label>
          </div>
          <div className='form-floating'>
            <Input className='login-input' id="floatNumber" type="number" placeholder='Телефон' />
            <Label for="floatNumber">Телефон</Label>
          </div>
          <div className='form-floating'>
            <Input className='login-input' id="floatEmail" type="email" placeholder='Email' />
            <Label for="floatEmail">Email</Label>
          </div>
          <div className='form-floating'>
            <Input className='login-input' id="floatCountry" placeholder='Страна' />
            <Label for="floatCountry">Страна</Label>
          </div>
          <div className='form-floating'>
            <Input className='login-input' id="floatPassword" type="password" placeholder='Пароль' />
            <Label for="floatPassword">Пароль</Label>
          </div>

          <FormGroup check className='mt-4'>
            <Input type="checkbox" />
            <Label check>
              Я ознакомился с политикой конфиденциальности и принимаю ее условия. Политика конфиденциальности
            </Label>
          </FormGroup>
          <FormGroup check className='mt-3'>
            <Input type="checkbox" />
            <Label check>
              Я ознакомился и принимаю условия Условия оферты
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Login;