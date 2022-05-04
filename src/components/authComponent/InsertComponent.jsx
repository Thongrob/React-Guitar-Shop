import MainLayout from "../layouts/MainLayout";
import DocumentTitle from "react-document-title";
import {useState} from "react"
import axios from "axios"
import Swal from "sweetalert2"

const InsertComponent = ()=> {
  const [state,setState] = useState({
    brand:"",
    model:"",
    price:""
  })
  const {brand, model, price} = state
  //กำหนดค่าให้กับ state
  const inputValue = name => event =>{
    // //Debug ดูค่าภายใน state
    // console.log(name, "=", event.target.value)
    setState({...state,[name]:event.target.value})
  }

  const submitForm = (e)=>{
    //preventDefault คือการให้ค่าค้างไว้ใน form
    e.preventDefault()
    //Debug ดูค่าที่จะทำการส่งไปยัง data base
    console.table({brand,model,price})
    console.log("API URL:",process.env.REACT_APP_API)
    axios
    .post(`${process.env.REACT_APP_API}/create`,{brand, model, price})
    .then(response=>{
      // alert("บันทึกข้อมูลเรียบร้อย")
      Swal.fire('แจ้งเตือน','บันทึกข้อมูลเรียบร้อย','success')
      setState({...state,brand:"", model:"", price:""})
    })
    .catch(err=>{
      // alert(err.response.data.error)
      Swal.fire('แจ้งเตือน',err.response.data.error,'error')
    })
  }
  return (
    <MainLayout>
      <DocumentTitle title="เพิ่มข้อมูลสินค้า" />

      <div className="container mb-5">
        <h1 className="my-4">เพิ่มข้อมูลสินค้า</h1>
        {/* Debug ดูค่าใน state */}
        {/* {JSON.stringify(state)} */}
        <div className="row">

          <form onSubmit={submitForm}>
            <div className="form-group col-lg-6">
              <label>ยี่ห้อ</label>
              <input type="text" className="form-control " value={brand} 
              onChange={inputValue("brand")}/>
            </div>

            <div className="form-group col-lg-6">
              <label>รุ่น</label>
              <input type="text" className="form-control" value={model} 
              onChange={inputValue("model")}/>
            </div>

            <div className="form-group col-lg-6">
              <label>ราคา</label>
              <input type="number" className="form-control" value={price} 
              onChange={inputValue("price")}/>
            </div>

            <input
              type="submit"
              value="บันทึก"
              className="btn btn-primary mt-3 col-lg-1"
            />
          </form>

        </div>
      </div>
    </MainLayout>
  );
}

export default InsertComponent;
