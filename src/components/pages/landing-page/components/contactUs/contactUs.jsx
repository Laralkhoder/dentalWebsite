import { Button, Form, Input  } from 'antd';
import img from "./../../../../../assets/57978.jpg"

export const ContactUs=()=>{

  const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  const validateMessages = {
    required: 'هذا الحقل مطلوب',
    types: {
      email: '${label} غير صالح',
    },
  };
  
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <section className="contact-us d-flex flex-column align-items-center mt-5" >
<div className="title" style={{fontSize: "32px",fontWeight: "500",  paddingBottom: "8px", borderBottom:" 2px solid var(--primary-color)"}}>اتصل بنا</div>
<div className="contact w-100 mt-4 d-flex align-items-center justify-content-center " style={{height:"500px",background: "linear-gradient(to bottom,white 0%,white 50%, var(--primary-color) 50%,var(--primary-color) 100%)"}}>
<div className=" d-flex align-items-center justify-content-center p-2 gap-4" style={{backgroundColor:"#eee",width:"800px",height:"400px",borderRadius:"10px"}}>
<div className="form p-3" >
<Form
{...layout}
name="nest-messages"
onFinish={onFinish}
style={{
width: 400,
}}
validateMessages={validateMessages}
>
<Form.Item
  name={['user', 'name']}
  label="الاسم"
  rules={[
    {
      required: true,
    },
  ]}
>
  <Input />
</Form.Item>
<Form.Item
  name={['user', 'email']}
  label=" البريد الالكتروني"
  rules={[
    {
      required: true,
      type: 'email',
    },
  ]}
>
  <Input />
</Form.Item>

<Form.Item name={['user', 'message']} label="الرسالة"
rules={[
  {
    required: true,}]}
>
  <Input.TextArea style={{resize:"none"}} rows={5}/>
</Form.Item>
<Form.Item
style={{marginBottom:"0"}}
  wrapperCol={{
    ...layout.wrapperCol,
    offset: 8,
  }}
>
  <Button type="primary" htmlType="submit" style={{backgroundColor: "var(--primary-color)",color: "white",marginBottom: "0"}}>
    إرسال
  </Button>
</Form.Item>
</Form>
</div>

<div className="img">
<img width="250px" style={{borderRadius:"50%"}} src={img} alt="" />
</div>

</div>
</div>
</section>
  )
}