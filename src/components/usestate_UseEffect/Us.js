import React,{useState} from 'react'

function Us() {
    //object type state created
    console.log('render')
    const [msgObj,setMsg] = useState({message:'',id:1})
    const handleChange=(e)=>{
        let msg = e.target.value;
        setMsg({...msgObj,message:msg})
    }
    return (
        <div>
        <input type="text" value={msgObj.message} onChange={handleChange}></input>
        <p>{msgObj.message}</p>
        <p>{msgObj.id}</p>
        </div>
    )
}

export default Us
