import React,{useEffect,useState} from 'react'

function Cleanup() {
    const [count,setCount] =useState(0);
    console.log('Render');
    useEffect(()=>{
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
        //cleanUp
        return ()=>{
            alert(`I Will be called before the next useEffect is called' ${count}`)
        }
    },)
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Cleanup
