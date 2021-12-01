import React, {useState, useEffect} from 'react';
import axios from 'axios';

function All() {
    const [fitur,setFitur] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3004/Object").then(res =>setFitur(res.data))
    }, [])
    return (
        <div>
            {  
            fitur.map (item => {
                return(
        <div className="col-lg-6 col-xxl-4 mb-5">
        <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection" /></div>
            <h2 className="fs-4 fw-bold">{item.Title}</h2>
            <p className="mb-0">{item.Subtitle}</p>
          </div>
        </div>
        </div>
                )

            })
            }
        
        </div>
        
    );
  }
  
  export default All;