import MainLayout from '../layouts/MainLayout'
import axios from 'axios'
import {useState, useEffect} from 'react'

const SingleComponent = ()=>{
    
    const[product, setProduct] = useState('')
       
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API}/product/ibanezgrg170dx`)
        .then((response) => {
            setProduct(response.data);        
          })
        .catch((err) => alert(err))
    },[]);

    return(

        <MainLayout>

            <div>
                {JSON.stringify(product)}

            </div>

        </MainLayout>

    )
}

export default SingleComponent