import MainLayout from "../layouts/MainLayout";
import DocumentTitle from "react-document-title";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const EditComponent = () => {
  const [state, setState] = useState({
    brand: "",
    model: "",
    price: "",
    slug:  ""
  });
  const { brand, model, price, slug } = state;
 
  //ดึงข้อมูลบทความที่ต้องแก้ไข
  useEffect(() => {
    
    axios
      .get(`${process.env.REACT_APP_API}/product/gibsonles-paul`)
      .then((response) => {
        // setState(response.data);
        // console.log(response.data)
        const {brand, model, price, slug} = response.data
        setState({...state, brand, model, price, slug})

      })
      .catch((err) => alert(err));
  }, []);

  
  //ฟังก์ชัน form เพื่อนำมาแก้ไข
  const showUpdateForm = ()=>(
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
              value="อัปเดต"
              className="btn btn-primary mt-3 col-lg-1"
            />
          </form>
  )

  //กำหนดค่าให้กับ state
  const inputValue = (name) => (event) => {
    // //Debug ดูค่าภายใน state
    // console.log(name, "=", event.target.value)
    setState({ ...state, [name]: event.target.value });
  };

  const submitForm = (e) => {
    //preventDefault คือการให้ค่าค้างไว้ใน form
    e.preventDefault()
    //Debug ดูค่าที่จะทำการส่งไปยัง data base
    // console.table({brand,model,price})
    console.log("API URL:",process.env.REACT_APP_API)
    axios
    .put(`${process.env.REACT_APP_API}/store/${slug}`,{brand, model, price})
    .then(response=>{
      // alert("บันทึกข้อมูลเรียบร้อย")
      Swal.fire('แจ้งเตือน','อัปเดทข้อมูลเรียบร้อย','success')
      const {brand, model, price, slug} = response.data
      setState({...state,brand, model, price, slug})
    })
    .catch(err=>{
      alert(err)

    })
  }
 
  return (
    <MainLayout>
      <DocumentTitle title="เพิ่มข้อมูลสินค้า" />

      <div className="container mb-5">
        <h1 className="my-4">แก้ไขข้อมูลสินค้า</h1>
        {/* Debug ดูค่าใน state */}
        {/* {JSON.stringify(state)} */}
        {showUpdateForm()}
      </div>
    </MainLayout>
  );
};

export default EditComponent;
