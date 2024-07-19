import { Button, Form, Input , Select ,Checkbox,message } from 'antd';
import  './../auth.css';
import img from './../../../../assets/register.png';
import axios from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {BASE_URL,REGISTER} from '../../../../api/api.jsx'
import { Loader } from '../../../shared/loader/loader.jsx';
export const Register = () => {


  const [isLoading, setIsLoading] = useState(false);

  
  const [messageApi, contextHolder] = message.useMessage();

  function register(values){
    try{
      setIsLoading(true);
      axios.post(`${BASE_URL}/${REGISTER}`,values)
      .then((response) => {console.log(response); successMessage(response.data.message);
      setIsLoading(false);
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

  const [checked,setChecked]=useState(false);
  const onChangeCheck = (e) => {
    setChecked(e.target.checked)
    console.log(checked)
    
  };
  const { Option } = Select;
  const onFinish = (values) => {
    console.log('Success:', values);
    {checked?values=({...values,role:"student"}):values=({...values,role:"patient"})}
    delete values.confirmPassword
    console.log(values)
    register(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const SuffixSelector = (
    <div>
    963+
    </div>
  );
  return (
    
<div className='main-container'> 
{isLoading?<div className="load position-absolute top-50 start-50 w-100 h-100" style={{transform:"translate(-50%,-50%)",zIndex:"100",backgroundColor:"rgba(255,255,255,0.5)"}}>
<Loader></Loader></div>
:""}
{contextHolder}
 <div className='auth-container'> 
    <div className="form-container"> 
    <h2 style={{color:"#0a9a95",fontSize:"26px",margin:"0 0 20px 0"}}>إنشاء حساب</h2>
     <Form
    layout="vertical"
    name="registerForm"
    
    style={{
      width: '400px',

    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
  <div className="three-inputs"> 
     <Form.Item
      label="الاسم"
      name="firstname"
      rules={[
        {
          required: true,
          message: 'الحقل مطلوب',
        },
      ]}
    >
      <Input 
     />
    </Form.Item>
    <Form.Item
    label="اسم الأب"
  name="midname"
    rules={[
      {
        required: true,
        message: 'الحقل مطلوب',
      },
    ]}
  >
    <Input   
    />
  </Form.Item>
  <Form.Item
  label="الكنية"
 name="lastname"
  rules={[
    {
      required: true,
      message: 'الحقل مطلوب',
    },
  ]}
>
  <Input  
/>
</Form.Item>
    </div>


    <div className="mini-container">  
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
    <Input type='email' 
    />
  </Form.Item>
  <Form.Item
name="mobilenumber"
  label="رقم الهاتف"
  rules={[
    {
       required: true, 
       message: 'الرجاء إدخال رقم هاتفك',
    },
    {
    pattern: new RegExp(/^9\d{8}$/),
    message: "الرجاء إدخال رقم هاتف صالح"}
      ]}
  
>
  <Input   
   type='number' addonAfter={SuffixSelector} style={{ width: '100%' }} />
</Form.Item>
</div>



<div className="mini-container">
<Form.Item
label="إنشاء كلمة مرور"
name="password"
rules={[
  {
    required: true,
    message: 'الرجاء إدخال 8 أحرف على الأقل ',
  },
  {
    min:8,
    message:'الرجاء إدخال 8 أحرف على الأقل'
  }
]
}
hasFeedback
>
<Input.Password
/>
</Form.Item>
<Form.Item
name="confirmPassword"
label="تأكيد كلمة المرور"
dependencies={['password']}
hasFeedback
rules={[
{
  required: true,
  message: 'الرجاء تأكيد كلمة المرور',
},
({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('كلمة المرور غير مطابقة'));
  },
}),
]}
>
<Input.Password 


/>
</Form.Item>
</div>
<Checkbox style={{marginBottom:"24px"}} onChange={onChangeCheck}>التسجيل كطالب</Checkbox>
{checked? <div className="mini-container">
<Form.Item
name="year"
label="السنة الدراسية"
hasFeedback
rules={[{ required: true, message: 'الرجاء اختيار السنة الدراسية' }]}
>
<Select 
style={{textAlign:"start"}}
 >
  <Option  value="4">الرابعة</Option>
  <Option  value="5">الخامسة</Option>
</Select>
</Form.Item>

<Form.Item
name="universityid"
label="الرقم الجامعي"
rules={[
  {
     required: true, 
     message: 'الرجاء إدخال رقمك الجامعي',
  },

    ]}

>
<Input 
 type='number' style={{ width: '100%' }} />
</Form.Item>

</div>:""}
  
  <Form.Item
  >
    <Button disabled={isLoading}  shape="round" className='auth-btn px-5' type='primary' htmlType="submit">
      تسجيل 
    </Button>
    <div className="auth-footer">
  
    لديك حساب؟ 
    <span style={{color:"#0a9a95",cursor:"pointer"}}>
    <Link to={"/login"}>
    تسجيل دخول
    </Link>
    </span>
    </div>
  </Form.Item>
</Form>
    </div>
  
  <div className="img-container">
    <img src={img} alt="" />
    </div>
  </div></div>
  
  )
}
