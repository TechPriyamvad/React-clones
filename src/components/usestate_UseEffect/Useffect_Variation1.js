import React,{useState,useEffect} from 'react'

function Useffect_Variation1() {
    console.log('render');
    let [count,setCount] = useState(0);
    useEffect(() => {
          console.log('use effect')
          document.title = `Clicked ${count} times`
    },)
    return (
        <div>
            <p>You clicked ${count} times</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}

export default Useffect_Variation1
