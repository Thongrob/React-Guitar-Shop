import MainLayout from './components/layouts/MainLayout'
import DocumentTitle from 'react-document-title'
import axios from 'axios'
import {useState,useEffect} from 'react'
function Service() {
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
  return (
    <MainLayout>
        <DocumentTitle title='บริการของเรา' />
        <div className="container mb-5">
          <h1 className="my-4">รายการสินค้า</h1>         
          {/* ทดสอบการ fetch ข้อมูลจาก api */}
          {/* {JSON.stringify(stores)} */}

          {stores.map((store,index)=>(
            <div className='row ' key={index}>
              <div className='col-sm-6 pt-3 pb-2 mb-5 bg-info'>
                <h2>{store.brand}</h2>
                <h5>{store.model}</h5>
                <h6>{store.slug}</h6>
            <button style={{borderRadius: 3}}>สั่งซื้อ</button>

              </div>
            </div>  
          ))}
        </div>
    </MainLayout>
  )
}

export default Service