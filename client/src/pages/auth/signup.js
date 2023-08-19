import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { handleSignUp } from "../../utils/auth";
const SignUp = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname:'',
        email:'',
        password:'',
    })
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(user)
        await handleSignUp(user)
        navigate('/dash')
    }
    return (
        <div className="auth">
            <div className="auth-form">
                <div className="auth-header">
                    <div className="subtitle">Sign Up</div>
                    <Link className="link" to='/signin'>
                        <div className="label">I already have an account</div>
                    </Link>
                </div>
                <div className="auth-content">
                    <input placeholder="Enter your first name" className="password"  onChange={(e)=>setUser({...user, firstname:e.target.value})}/>
                    <input placeholder="Enter your last name" className="password"  onChange={(e)=>setUser({...user, lastname:e.target.value})}/>
                    <input placeholder="Enter your email" className="email"  onChange={(e)=>setUser({...user, email:e.target.value})}/>
                    <input placeholder="Enter your password" className="password" onChange={(e)=>setUser({...user, password:e.target.value})}/>
                    <button  className="submit" onClick={handleSubmit}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;