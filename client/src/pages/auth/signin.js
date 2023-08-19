import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { handleSignIn } from "../../utils/auth";
const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(email)
        const user = {
            email:email,
            password: password,

        }
        await handleSignIn(user)
        navigate('/dash')
    }
    return (
        <div className="auth">
            <div className="auth-form">
                <div className="auth-header">
                    <div className="subtitle">Sign In</div>
                    <Link className="link" to='/signup'>
                        <div className="label">I don't have an account</div>
                    </Link>
                </div>
                <div className="auth-content">
                    <input placeholder="Enter your email" className="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input placeholder="Enter your password" className="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button  className="submit" onClick={handleSubmit}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;