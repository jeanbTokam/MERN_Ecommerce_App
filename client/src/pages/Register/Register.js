import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom'; // Import the Link component

function Register() {
  return (
    <div className='h-screen bg-primary  flex justify-center items-center'>
      <div className="bg-white  p-5 rounded w-[400px] ">
         <Form layout="vertical">
             <Form.Item label='Name'name='name'>
               <Input placeholder= ' Enter your Name'/>
             </Form.Item>
             <Form.Item label='Email'name='email'>
               <Input placeholder= 'Enter your Email'/>
             </Form.Item>
             <Form.Item label='Password'name='password'>
               <Input type="password" placeholder= 'Enter your Password' />
             </Form.Item>

             <Button  type="primary" htmlType='submit'>Register</Button>
        
             <div className="mt-5 text-center">
              <span className="text-gray-500">
                Already have an account? <Link to="/login">Login</Link> here!
              </span>
             </div>
        
         </Form>     
      </div>
    </div>
  );
}

export default Register;
