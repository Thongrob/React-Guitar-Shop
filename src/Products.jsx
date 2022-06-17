import MainLayout from "./components/layouts/MainLayout";
import DocumentTitle from "react-document-title";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const Products = () => {
  //ฟังก์ชันการดึงข้อมูลทั้งหมด
  const [stores, setStores] = useState([]);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/stores`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  //ฟังก์ชันการใส่ comma คั่นตัวเลข
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  return (
    <MainLayout>
      <DocumentTitle title="รายการสินค้า" />
      <div className="container mb-5">
        <h1 className="my-4">รายการสินค้า</h1>
        {/* ทดสอบการ fetch ข้อมูลจาก api */}
        {/* {JSON.stringify(stores)} */}

        {stores.map((product, index) => (
          <div className="row " key={index}>
            <div className="col-sm-12 pt-3 pb-2 mb-5 border rounded bg-white text-dark">
              <Link to={`/product/${product.slug}`}>
              <h2>{product.brand}</h2>
              </Link>
              <h5>{product.model}</h5>
              <h6>{formatNumber(product.price)} บาท</h6>
              <p className='text-muted'>Date :{new Date(product.createdAt).toLocaleString()}</p>
              <button className="rounded me-3 btn btn-outline-primary">สั่งซื้อ</button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Products;
