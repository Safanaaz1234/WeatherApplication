import "./css/style.css";
import {useState,useEffect} from "react";

const Temp=()=>{
    const [city,setCity] = useState("");
    const [search,setSearch] = useState("");
    console.log(city);
    useEffect(()=>{
        const getApi=async()=>{
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fd81b78c18ac4d9ab0ee59cefdfcb395`);
                const data = await response.json();
                console.log(data);
                console.log(data.main.temp);
                setCity(data);
            }catch(err){
                console.log(err);
            }
        }
        
        getApi();
    },[search])
    return(
        <>
            <div className="container">
                <div>
                    <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div className="content">
                {(city==="") ? (<h1>No city found</h1>):(
                 <div className="content">
                        
                        <h2 className="city_name">{search}</h2>
                        <h1 className="temp">{city.main.temp} Cel</h1>
                        <h5 className="tempmin_max">Min : {city.main.temp_min} Cel | Max : {city.main.temp_max} Cel</h5>
                 </div>    
                    
                )}
                </div>
            </div>
        </>
    )
}

export default Temp;