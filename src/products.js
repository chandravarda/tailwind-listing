import "./ok.css"
import React,{useState,useEffect} from "react";

function Products() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
         .then((res)=>res.json())
         .then((json)=>setData(json.products))
         .catch((error) => console.error("Fetch error:", error)); 
},[])

console.log(data)

  return (
    <>
    <div className="grid grid-cols-1 gap-4 ml-10  sm:grid-cols-2 lg:grid-cols-4">
        {
            data.map((product)=>(
                <div key={product.id}>
                <div key={product.id} style={{
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '10px',
              width: '200px',
              textAlign: 'center'
            }}>
              <img src={product.images} alt={product.name} style={{ width: '100%', borderRadius: '5px' }} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>${product.price.toFixed(2)}</strong></p>
            </div>
              </div>
            ))
        }
    </div>
    </>
  )
}

export default Products;