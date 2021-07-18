import React,{useState,useEffect} from 'react'

function Useffect_Variation2() {
    console.log('render');
    const [count,setCount]=useState(0);
    const  handleClick=()=>{
        setCount(count+1)
    }

    useEffect(() => {
        console.log('use effect')
        document.title=`Clicked ${count} times`
    },[])

    return (
        <div>
            <p>You clicked ${count} times</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Useffect_Variation2
