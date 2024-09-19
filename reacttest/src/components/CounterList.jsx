import React from 'react'

export default function CounterList({counters, openModal}) {
  return (
    <div>
    <span style={{color:"grey"}}>Counters</span>
    {counters.map((counter, i)=>{
        return (
            <div key={i} onClick={()=>{openModal("c"+i)}} style={{border:"1px solid black", borderRadius:"5px", cursor:"pointer"}}>
                <span class="counter-name">{counter.name} </span>
                {/* <div className="test"> */}
                    {counter.labels.map((label, i)=>{
                        return <span key={i}>{label}</span>
                    })}
                {/* </div> */}
  
            </div>
        );
    })}
</div>
  )
}


