import { useState } from "react";
import validation from "./Validations";

const Form = (props) => {
    const {login} = props; 
    const [ userData , setUserData ] = useState ({
        email:"",
        password:"",
    })

    const handleChange = (event) => {
        /*if(event.target.name === "email"){
            setUserData({...userData, email: event.target.value})
        }
        if(event.target.name === "pass"){
            setUserData({...userData, password: event.target.value})
        }*/
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validation({...userData,[property]:value})); {/*le pasamos el estado a validation*/}
        setUserData ({...userData, [property]:value});
    }   

    const [ errors , setErrors ] =  useState({});

    const handleSubmit = (evento) => {
        evento.preventDefault();
        login(userData);
    }


return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Email:</label>
            <input type="text" name="email" value = {userData.email} onChange={handleChange}/> {/*para tomar la info uso el onChange*/}
            <span style={{color:"black"}}>{errors.email}</span>
        </div>
        <div>
            <label htmlFor="">Password:</label>
            <input type="password"  name="password" value = {userData.password} onChange={handleChange}/>
            <span style={{color:"blue"}}>{errors.password}</span>
        </div>
        <button>Submit</button>
    </form>
)
}

export default Form;