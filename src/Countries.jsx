import React, { useEffect } from "react";
import axios from "axios";
function Countries() {
    var [Countries, SetCountries] = React.useState([])
    React.useEffect(function () {
        axios.get("https://restcountries.com/v3/all").then(function (res) {
            console.log(res.data)
            SetCountries([...res.data])



        })
    }, [])

    return (

        <div className='Common'>
            {

                Countries.map(function(s,i){

                    return(

                            <div>

                                <li>{s.name.common}</li>
                                

                            </div>


                    )


                })
            }


        </div>


    )

}

export default Countries