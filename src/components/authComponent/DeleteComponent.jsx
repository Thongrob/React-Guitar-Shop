import MainLayout from '../layouts/MainLayout'
import DocumentTitle from 'react-document-title'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

const DeleteComponent = ()=> {
  //ฟังก์ชันการดึงข้อมูลทั้งหมด
  const [stores,setStores] = useState([])

  const fetchData=()=>{
    axios
    .get(`${process.env.REACT_APP_API}/stores`)
    .then(response=>{
      setStores(response.data)
    })
    .catch(err=>alert(err))
  }
  useEffect(()=>{
    fetchData()
  },[])

  const confirmDelete = (slug)=>{
    //ทดสอบการลบอ้างอิงจาก slug
    //alert(slug)
    Swal.fire({
      title:"คุณต้องการลบรายการหรือไม่",
      icon:"warning",
      showCancelButton:true  
    }).then((result)=>{
      //กดปุ่ม ok หรือตกลง
      if(result.isConfirmed){
        // alert(slug)
        deletStore(slug)
      }
    })
  }
  
  const deletStore = (slug)=>{
    axios
    .delete(`${process.env.REACT_APP_API}/store/${slug}`)
    .then((response)=>{
      //ส่ง request ไปที่ api เพื่อลบข้อมูล
      Swal.fire('Deleted', response.data.message,'success') 
      fetchData()     
    })
    .catch(err=>console.log(err))
  }

   //ฟังก์ชันการใส่ comma คั่นตัวเลข
   const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  return (
    <MainLayout>
        <DocumentTitle title='แก้ไขรายการ' />
        <div className="container mb-5">
          <h1 className="my-4">รายการสินค้า</h1>         
          {/* ทดสอบการ fetch ข้อมูลจาก api */}
          {/* {JSON.stringify(stores)} */}

          {stores.map((store,index)=>(
            <div className='row ' key={index}>
              <div className='col-sm-12 pt-3 pb-2 mb-5 border rounded bg-white text-dark'>
                <h2>{store.brand}</h2>
                <h5>{store.model}</h5>
                {/* <h6>{store.slug}</h6> */}
                <h6> ราคา {formatNumber(store.price)} บาท</h6>
                <p className='text-muted'>Date :{new Date(store.createdAt).toLocaleString()}</p>
                <Link className='rounded  btn btn-outline-success' to={`/product/edit/${store.slug}`}>แก้ไข</Link> &nbsp;
                <button className='rounded  btn btn-outline-danger' onClick={()=>confirmDelete(store.slug)}>ลบ</button>

              </div>
            </div>  
          ))}
        </div>
    </MainLayout>
  )
}

export default DeleteComponent