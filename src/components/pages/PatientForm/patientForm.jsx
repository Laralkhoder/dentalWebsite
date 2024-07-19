import { Button, Form, Input  ,Checkbox ,Radio ,message } from 'antd';
import { useEffect, useState } from 'react';
import { NavBar } from "../../shared/nav-bar/Navbar"
import  './patientForm.module.css';
import axios from 'axios';
import { ADD_MEDICALFORM, BASE_URL } from '../../../api/api';
import { Loader } from '../../shared/loader/loader';

export const PatientForm =()=>{

  const [messageApi, contextHolder] = message.useMessage();


  const [isLoading, setIsLoading] = useState(false);
  const [clinical, setClinical] = useState([]);
  const [clinicalsCheckBox, setClinicalsCheckBox] = useState([]);


  useEffect(() => {
    try{
      setIsLoading(true);
    axios.get(BASE_URL+"/clinicale/").then(res=>{
      console.log(res)
      setClinical(res.data);
      console.log(clinical);
      const transformedData = res.data.map(ele => ({ _id: ele._id, name: ele.name, description:new Array(ele.description.length).fill(false) }));
      setClinicalsCheckBox(transformedData);
      console.log(transformedData);
      setIsLoading(false);
      
    })
    .catch(err=>{
      console.log(err)
      setIsLoading(false);
    })}
    catch(err){
      console.log(err)
    
    }    console.log("clinicals");
  }, []);


  const submitForm =(values)=>{
    try {
      setIsLoading(true);
      axios.post(`${BASE_URL}/${ADD_MEDICALFORM}`,values)
        .then((response) => {console.log(response);

        successMessage(response.data.message);
        setIsLoading(false);
      })
        .catch((error) =>{ console.log(error);
        errorMessage(error.response.data.message);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error)
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

  const onFinish = (values) => {
    values['gender']=genderValue
    values["smoking"]=JSON.stringify({
        "isSmoker":smokerChecked,
        "smokingType":values.smokingType,
        "duration":values.duration,
        "unitsPerDay":values.unitsPerDay
    })
    delete values.smokingType
    delete values.duration
    delete values.unitsPerDay
    values['objclin']=JSON.stringify(clinicalsCheckBox)
    console.log('Success:', values);
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      if (typeof values[key] !== 'object') formData.append(key, values[key])
      else formData.append(key, JSON.stringify(values[key]))
    })
    submitForm(formData)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const SuffixSelector = (
    <div>
    963+
    </div>
  );

  const [smokerChecked,setSmokerChecked]=useState(false);
  const onChangeCheck = (e) => {

    setSmokerChecked(e.target.checked)
    console.log(smokerChecked)
    
  };

  const [genderValue, setGenderValue] = useState(1);
  const onChangeGender = (e) => {
    console.log('radio checked', e.target.value);
    setGenderValue(e.target.value);
    console.log(genderValue);
  };

  const [smokingRadioFormData, setsmokingRadioFormData] = useState([
    { name: 'pregnant', label: 'حامل', value: false },
    { name: 'breastfeeding', label: 'مرضع', value: false },
    { name: 'anemiaAndBleedingDisorders', label: 'أمراض فقر الدم والنزف', value: false },
    { name: 'respiratoryAndCardiacDisorders', label: 'أمراض الجهاز التنفسي والقلبية', value: false },
    { name: 'glandDiseases', label: 'أمراض الغدة الدرقية', value: false },
    { name: 'fainting', label: 'حالات الإغماء', value: false },
    { name: 'gastrointestinalDisorders', label: 'اضطرابات الجهاز الهضمي', value: false },
    { name: 'kidneyDiseases', label: 'أمراض الكلى', value: false },
    { name: 'hepaticAndLiverDisease', label: 'أمراض الكبد', value: false },
    { name: 'mucousSkinEnuncidals', label: 'الانتانات الجلدية المخاطية ', value: false }
   ]);



console.log(clinicalsCheckBox);


const handleClinicalCheckboxChange = (index, clinicalIndex) => {
  setClinicalsCheckBox(prevState => {
    const updatedClinicalsCheckBox = [...prevState];
    updatedClinicalsCheckBox[clinicalIndex].description[index] = !updatedClinicalsCheckBox[clinicalIndex].description[index];
    return updatedClinicalsCheckBox;
  });
};

console.log(clinicalsCheckBox);


const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return(
    <div className=''>
    {isLoading?<div className="load position-absolute top-50 start-50 w-100 h-100" style={{transform:"translate(-50%,-50%)",zIndex:"100",backgroundColor:"rgba(255,255,255,0.5)"}}>
    <Loader></Loader></div>
    :""}
    {contextHolder}
    <NavBar></NavBar>

    
    <div className="m-auto my-5 p-5" style={{backgroundColor:"var(--secondary-color)",color:"black",width:"1000px",borderRadius:"12px"}}>
    <h1 className="title text-center mb-5" style={{color:"var(--primary-color)"}}>
    استمارة المريض
    </h1>
    
    <div className="form">
    
    <Form
    layout="vertical"
    name="PatientForm"
    className='PatientForm'
    style={{
      width: '800px',
      margin:"auto"

    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >

  <div className="row">
     <Form.Item
      label="الاسم"
      name="name"
      rules={[
        {
          required: true,
          message: 'الحقل مطلوب',
        },
      ]}
      style={{
        width: '50%',
  
      }}
    >
      <Input  type='text'
     />
    </Form.Item>
    <Form.Item
    label="العمر"
    name="age"
    rules={[
      {
        required: true,
        message: 'الحقل مطلوب',
      },
    ]}
    style={{
      width: '50%',
    }}
  >
    <Input  type='number'
   />
  </Form.Item>
  <div className="gender d-flex flex-column gap-2">
<label className='gender-label'>الجنس</label>
  <Radio.Group
  style={{
    width: '200px',
    marginBottom:"20px"
  }}
  onChange={onChangeGender} value={genderValue}>
  <Radio value={"male"}>ذكر</Radio>
  <Radio value={"female"}>أنثى</Radio>
</Radio.Group></div>

  <Form.Item
  label="العمل"
  name="job"
  rules={[
    {
      required: true,
      message: 'الحقل مطلوب',
    },
  ]}
  style={{
    width: '50%',

  }}
>
  <Input  type='text'
 />
</Form.Item>
<Form.Item
label="العنوان"
name="address"
rules={[
  {
    required: true,
    message: 'الحقل مطلوب',
  },
]}
style={{
  width: '50%',

}}
>
<Input  type='text'
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
    pattern: new RegExp(/^9\d{8}/),
    message: "الرجاء إدخال رقم هاتف صالح"}
      ]}
  style={{
    width:"50%"
  }}
>
  <Input   
   type='number' addonAfter={SuffixSelector}  />
</Form.Item>
<Form.Item
label="أمراض سابقة"
name="previousDisease"

style={{
  width: '50%',

}}
>
<Input  type='text'
/>
</Form.Item>

<Form.Item
label="أمراض حالية"
name="currentDisease"

style={{
  width: '50%',

}}
>
<Input  type='text'
/>
</Form.Item>
<Form.Item
label="الأدوية التي تأخذها إن وجدت"
name="medicines"

style={{
  width: '50%',

}}
>
<Input  type='text'
/>
</Form.Item>
<Form.Item
label="نوع الحساسية إن وجدت"
name="allergytype"

style={{
  width: '50%',

}}
>
<Input  type='text'
/>
</Form.Item>

</div>


<Checkbox style={{marginBottom:"24px"}} onChange={onChangeCheck}>مدخن </Checkbox>
{smokerChecked? <div className="">

<div className="row">
<Form.Item
name="smokingType"
label="نوع التدخين"
style={{ width: '50%' }}
>
<Input 
 type='text'  />
</Form.Item>
<Form.Item
name="duration"
label="المدة الزمنية"
style={{ width: '50%' }}
>
<Input 
 type='number'  />
</Form.Item>
<Form.Item
name="unitsPerDay"
label="العدد/اليوم"
style={{ width: '50%' }}
>
<Input 
 type='number' />

</Form.Item>
<div className="row"
style={{
  display:"grid",
  gridTemplateColumns:"1fr 1fr"
}}
>
{smokingRadioFormData.map((item) => (
  <Form.Item
  style={{
    textAlign:"right"
  }}
  className='radio-container'
    key={item.name}
    name={item.name}
    label={item.label}
  >
    <Radio.Group
      style={{ width: '200px' }}
      onChange={(e) => setsmokingRadioFormData((prevData) => {
        return smokingRadioFormData.map((formDataItem) => {
          if (formDataItem.name === item.name) {
            return { ...formDataItem, value: e.target.value === 'true' };
          }
          return formDataItem;
        });
      })}
      value={item.value}
    >
      <Radio value={true}>نعم</Radio>
      <Radio value={false}>لا</Radio>
    </Radio.Group>
  </Form.Item>
))}</div></div>
</div>
:""}

<h3>الحالات</h3>
<div className="cards " style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"16px"}} >
{clinical.map((ele,clinicalIndex)=>{ 
  return <div className="card"   key={clinicalIndex}>
  <div className="row g-0">
  <div className="col-md-4 d-flex align-items-center">
    <img style={{maxWidth:"200px",width:"100%"}} src={ele.image[0]} className="img-fluid rounded-start" alt="..."></img>
  </div>
  <div className="col-md-8">
  <div className="card-body">
    <h5 className="card-title" style={{color:"var(--primary-color)"}}>{ele.name}</h5>
    <p className="card-text"></p>
<h6>تشخيص الحالة :</h6>
<ul className="list-group list-group-flush p-0">
{ele.description.map((desc,index)=>{
  return   <li  key={index}  className="list-group-item"> <Checkbox style={{marginBottom:"24px"}} 
  checked={clinicalsCheckBox[clinicalIndex].description[index]}
  onChange={() => handleClinicalCheckboxChange(index, clinicalIndex)}
  >{desc} </Checkbox></li>
})
}
</ul>
 
</div>
</div>
</div>
</div>
})}
 </div>
  <Form.Item
  className='submit-button mt-5'
  >
    <Button disabled={isLoading} onClick={handleClick}
      shape="round" className=' px-5 py-2' style={{backgroundColor:"white",color:"black",height:"50px"}}   htmlType="submit">
      إرسال الاستمارة 
    </Button>
  </Form.Item>

</Form>
    
    </div></div>
    </div>
  );
  
}