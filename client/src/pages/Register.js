import React from 'react';
import { Form, Input } from 'antd';
import '../styles/RegisterStyle.css';
import {Link} from 'react-router-dom';


const Register = () => {

//const navigate = useNavigate()
const onfinishHandler = (values) => {
    console.log(values)
}

  return (
    <>
        <div className="form-container">
            <Form layout="vertical" onFinish={onfinishHandler} className='register-form'>
                <h1>Registartion Form</h1>
                <Form.Item label="Name" name="name">
                    <Input type="text" required/>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type="email" required/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password" required/>
                </Form.Item>
                <Link to="/login" className='m-2'>Already User Sign in here</Link>
                <button className='btn btn-primary' type="submit">Register</button>
            </Form>
        </div>

    </>
  )
}

export default Register