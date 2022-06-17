import MainLayout from "../layouts/MainLayout";
import { useParams} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const SingleComponent = ()=>{
   const [product, setProduct] = useState('')
    let {slug} = useParams()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/product/${slug}`)
        .then(responce =>{
            setProduct(responce.data)
        })
        .catch(err => alert(err))
    }, []);
    
    //ฟังก์ชันการใส่ comma คั่นตัวเลข
    const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    return( 
        <MainLayout>
            <div className="container">
                <div className="brand-item">
                    <h3>{product.brand}</h3>
                    <h6>Model: {product.model}</h6>
                    <h6>Price: {formatNumber(product.price)}</h6>
                </div>
                <div className="content-item">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis consectetur sit porro incidunt sint, asperiores iure libero, tempore provident laudantium. At tempora recusandae non optio itaque quo dolorem nisi, numquam est quaerat accusantium, veritatis aliquid porro facere atque ipsam ipsa accusamus in soluta quasi voluptatum rerum. Veritatis, iusto laudantium?</p>  
                </div>
                
            </div>
        </MainLayout>
    )
}

export default SingleComponent