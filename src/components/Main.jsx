import React, { useEffect, useState } from "react";
import { Button, TextField, FormControl, Select } from "@mui/material";
import classes from './Main.module.css'
import Axios from "axios";

const Main = () => {
    const [text1, settext1] = useState(1);
    const [text2, settext2] = useState(1);
    const [country, setcountry] = useState([]);
    const [country2, setcountry2] = useState([]);
    const [value1, setvalue1] = useState(1);
    const [value2, setvalue2] = useState(1);

    useEffect(()=>{
        
    }, []);


    async function getdata(){
        const response = await Axios.get("https://api.minfin.com.ua/nbu/0f105820623a4684ccb2801d524375819ea8f2c5/");
        const result = response.json();
        console.log(response.data);
        setcountry(result.data.rate);
        setcountry2(result.data.rate);
    }
    
    function convert(e) {
        e.preventDefault();
        let num =(value2/value1)*text1;
        settext2(num);
    }
    return (
        <div className={classes.Main}>
            <form onSubmit={convert}>
            <div className={classes.container}>
                <TextField variant="outlined" value={text1 || ""} onChange={(e)=>settext1(e.target.value)} />
                <FormControl className={classes.dropdown} variant="outlined" onChange={(e)=>setvalue1(e.target.value)} autoComplete="off" >
                    <Select native>
                        {Object.keys(country).map((value,index)=>
                        <option key={index} value={country[value]}>{value}</option>)}
                    </Select>
                </FormControl>
            </div>
            <div className={classes.container}>
                <TextField variant="outlined" value={text2 || ""}/>
                <FormControl className={classes.dropdown} variant="outlined" onChange={(e)=>setvalue2(e.target.value)}>
                    <Select native>
                    {Object.keys(country2).map((value,index)=>
                        <option key={index} value={country[value]}>{value}</option>)}
                    </Select>
                </FormControl>
            </div>  
            <Button type ='submit' variant='contained' className={classes.button}>
                Convert
            </Button>        
            </form>
        </div>
    )
}

export default Main;