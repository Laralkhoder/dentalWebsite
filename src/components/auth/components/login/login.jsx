import { Button, Form, Input ,message  } from 'antd';
import {  Link, useParams } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import img from './../../../../assets/register.png';
import  './../auth.css';
import { Loader } from '../../../shared/loader/loader';
import {BASE_URL,LOGIN} from '../../../../api/api.jsx'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
export const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const params = useParams();
  const navigateTo = useNavigate ();
  const login=(values)=>{
    try{
      setIsLoading(true);
      axios.post(`${BASE_URL}/${LOGIN}`,values)
      .then((response) => {console.log(response); successMessage("تم تسجيل الدخول بنجاح");
      Cookies.set("id", response.data._id);
				Cookies.set("jwt", response.data.token);
      setIsLoading(false);
      navigateTo("/")
      })
      .catch((error) =>{ console.log(error);
        errorMessage(error.response.data.message);
        setIsLoading(false);
      });
      console.log("success")
    
    }
    catch(err){
      console.log(err)
    
    }
  }
  const handleVerify = () => {
		if (params.userid != null) {
      console.log("if")
      setIsLoading(true);
      axios.get(BASE_URL+`/auth/${params.userid}/verify/${params.verificationToken}`)
				.then( (res)=> {
          console.log(res)
					successMessage(res.data.message)
          setIsLoading(false);
				})
				.catch( (err)=> {
          console.log(err)
					errorMessage(err.response.data.message)
          setIsLoading(false);
				});
		}
    else {
      console.log("else")
    }
	};
  const errorMessage = (message) => {
    messageApi.open({
      type: 'error',
      content: message,
      duration: 5,
    });
  };
  
  const successMessage = (message) => {
    messageApi.open({
      type: 'success',
      content: message,
      duration: 5,
      
    });
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    login(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    console.log("pp")
    handleVerify();
  }, []);



  return (
<section className='main-container' > 
{isLoading?<div className="load position-absolute top-50 start-50 w-100 h-100" style={{transform:"translate(-50%,-50%)",zIndex:"100",backgroundColor:"rgba(255,255,255,0.5)"}}>
<Loader></Loader></div>
:""}
{contextHolder}
    <div className='auth-container'> 
    <div className="form-container"> 
    <h2 style={{color:"#0a9a95",fontSize:"26px",margin:"0 0 20px 0"}}>تسجيل دخول</h2>
    
     <Form
    layout="vertical"
    
    name="loginForm"
    style={{
      width: 400,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
    name="email"
    label="البريد الالكتروني"
    
    rules={[
      {
        type: 'email',
        message: 'عنوان الريد الالكتروني غير صالح',
      },
      {
        required: true,
        message: 'الرجاء إدخال بريدك الالكتروني',
      },
    ]}
  >
    <Input type='email'/>
  </Form.Item>




<Form.Item
label="كلمة المرور"
name="password"
rules={[
  {
    required: true,
    message: 'الرجاء إدخال 8 أحرف على الأقل ',
  },
]
}
hasFeedback
>
<Input.Password />
</Form.Item>
    <Form.Item
  
    >
      <Button  shape="round" className='auth-btn px-4' type='primary' htmlType="submit">
      تسجيل الدخول
      </Button>
    </Form.Item>
    <div className="auth-footer">
ليس لديك حساب؟ 
<span style={{color:"#0a9a95", cursor:'pointer'}}>
<Link to={"/register"}>
إنشاء حساب
</Link>
</span>
</div>
  </Form>

    </div>
  
  <div className="img-container">
    <img src={img} alt="" />
    </div>
  </div>
  </section>
  )
}
