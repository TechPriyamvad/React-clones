import React ,{useState,useEffect}from 'react'

function Infinitte() {
    console.log('render')
    const[count,setCount] = useState(0)
    useEffect(()=>{
     console.log('use effect'); 
     let   val=Math.random();
     setCount(val);
    },[])
    return (
        <div>
            <p>You clicked ${count} times</p>
        </div>
    )
}

export default Infinitte
