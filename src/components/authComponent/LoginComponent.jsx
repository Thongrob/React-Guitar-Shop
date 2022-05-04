import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import {useState} from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import {authenticate} from "../../services/authorize"


const LoginComponent = (props)=>{
    const [state,setState] = useState({
        username:"",
        password:""
    })
    const {username,password} = state
    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value})
    }
    const submitForm=(e)=>{
        e.preventDefault()
        // //ทดสอบการแสดงผล user, password
        // console.table({username,password})
        axios
        .post(`${process.env.REACT_APP_API}/login`,{username, password})
        .then(response=>{
            // //แสดงผลเมื่อ login สำเร็จ
            // console.log(response)

            //login สำเร็จ
            authenticate(response,()=>props.history.push("/create"))

        })
        .catch(err=>{
            // //ทดสอบให้แสดง error ผ่าน console
            // console.log(err.response.data.error)
            Swal.fire('แจ้งเตือน',err.response.data.error,'error')

        })

    }
    return(
        <div className='container p-5'>
            <Navbar/>
            <h1>เข้าสู่ระบบ | Admin</h1>

            {/* //Debug ดู  user,password 
            {JSON.stringify(state)} */}

            <form onSubmit={submitForm}>
                <div className='form-group'>
                    <label>Username</label>
                    <input type="text" className='form-control'
                        value={username}
                        onChange={inputValue("username")}
                    />                    
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type="password" className='form-control'
                        value={password}
                        onChange={inputValue("password")}
                    />                    
                </div>
                <br/>
                <input type="submit" value="เข้าสู่ระบบ" className="btn btn-primary" />
            </form>
            <Footer/>
        </div>
    )
}

export default LoginComponent