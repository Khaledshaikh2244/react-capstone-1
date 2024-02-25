import {useState} from 'react'


const RegisterForm = () => {
    const [fomrValues , setFormValues] = useState({
        name : "",
        username : "",
        email : "",
        mobile : "",
        checkbox : false  
    });

    const handleChange = (e) => {
      setFormValues({ ...fomrValues, [e.target.name] : e.target.value}) 
    }

    
  return (
    <div style={{display:"flex" , flexDirection : "column" , justifyContent : "center",width: "30%"}}>
      <input type="text"  placeholder = "Name"  name="" id="name"  value={fomrValues.name} 
      onChange={handleChange}/>    
        <br />

      <input type="text" name="Username" placeholder = "username" id=""  value={fomrValues.username} 
      onChange={handleChange}/>   <br />

       <input type="text" name="Mobile" placeholder = "Mobile   " id="" value={fomrValues.mobile} 
       onChange={handleChange}/>
        <br />

       <input type="checkbox" name="checkbox" id="checkbox"  value={true} 
       onChange={handleChange}/>

       <button>Sign Up</button>
       <p>RegistrationPage</p>
    </div>
  )
}

export default RegisterForm
