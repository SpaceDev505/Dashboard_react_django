import axios from 'axios'

export const handleSignIn =async(user) =>{
    await axios
    .post('http://localhost:8000/signin/', user, {
        headers: { 'Content-Type':'application/json'}
    })
    .then((res)=>{
        localStorage.clear()
        // localStorage.setItem('access_token')
        console.log(res)
        console.log('signin')
    }
    )

}
export const handleSignUp = async(user)=>{
    await axios
    .post('http://localhost:8000/signup/', user, {
        headers: {'Content-Type':'application/json'}
    })
    .then((res)=>{
        console.log(res)
        localStorage.clear()
        console.log('signup')
    })
}