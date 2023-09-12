import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
function Countries() {
    var [Countries, SetCountries] = React.useState([])
    useEffect(function () {
        axios.get("https://restcountries.com/v3/all").then((res)=> {
         SetCountries(res.data)
        })
    },[])
    return (  
            <div className="Common" >
                <div>
                {Countries.map(function(s) {
                    return (<li><Link to={"naga/"+s.name.common}>{s.name.common}</Link></li>)
                })}
                <Outlet></Outlet>
            </div>
            </div>
    )
}

export default Countries;