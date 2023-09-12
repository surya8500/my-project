import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
function Abc(){
    var[x,setX]=useState(null);
    var {cname}=useParams();
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/name/"+cname).then((res)=>{
            setX(...res.data)
        })
    },[cname]);
    console.log(x)
    return(<div className="d-flex">
        <h1>welcome</h1>{
            x&&(<div>
                <h1>{x.name.common}</h1>
                <img src={x.flags.png}/>
                </div>
            
            )
        }
    </div>)

}
export default Abc;