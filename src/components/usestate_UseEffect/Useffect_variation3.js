import React,{useEffect,useState} from 'react'
import './Useffect_variation3.style.css'

function Useffect_variation3() {
    console.log('render');
    const [count,setCount] =useState(0);
    const [darkMode,setDarkMode] =useState(false);
    useEffect(()=>{
        console.log('useEffect');
        document.title= `Clicked ${count} times`;
    },[count])
    
    return (
        <div className={darkMode ? "view dark-mode":"view"} >
            <label htmlFor='dark Mode'>DarkMode</label>
            <input type='checkbox' checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </div>
    )
}

export default Useffect_variation3
