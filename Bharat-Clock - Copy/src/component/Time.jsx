import { useEffect, useState } from "react";

function Time(){
    const [time,settime]=useState(new Date());
    // let time= new Date()
    console.log("current time loaded")
    useEffect(()=>{const intreval=setInterval(()=>{
        settime(new Date());
    },10000)
return()=>{
    clearInterval(intreval)
    console.log("cancled intravel")
}},[])
    return (
        <div class="font-monospace">This is the current time
        <br />
        <br />
        <div style={{
        width: "200px",
        height: "50px",
        backgroundColor: "white",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        background: "linear-gradient(135deg, #ff7eb3, #ff758c, #ff6b81)",
      }}>{time.toDateString()}-{time.toLocaleTimeString()}</div></div>
    )
}
export default Time;