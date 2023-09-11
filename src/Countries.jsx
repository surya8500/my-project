import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

function Countries() {
    var [Countries, SetCountries] = React.useState([])
    React.useEffect(function () {
        axios.get("https://restcountries.com/v3/all").then(function (res) {
            var temp = [...res.data]
            SetCountries([...temp])
            console.log(temp)


        })
    }, [])

    return (
        <>
            <div>
                <div style={{ border: "1px solid" }} className="m-2">
                    <b> sort by population</b>
                    <nbsp></nbsp>
                    <span className="p-2">Ascending  </span>
                    <span className="p2 m-3">Descending</span>
                    <input type="text" placeholder="search" />

                    <i class="bi bi-list-columns-reverse  " />
                    <i class="bi bi-grid ms-50" />

                </div> 



            </div>
            <div className="d-flex flex-wrap justify-content-center bg-black">
                {Countries.map(function (s, i) {
                    return (
                        <div className="border border-2 m-3  bg-secondary-subtle " style={{ width: "200px" }} >
                            <h5> {s.name.common}</h5>
                            <img src={s.flags[1]} style={{ width: "200px" }} />
                            <b style={{ alignContent: "center" }}>population :{s.population}</b>
                        </div>
                    )
                })}
            </div>
        </>
    )





}

export default Countries