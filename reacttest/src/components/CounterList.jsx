import React from 'react'

export default function CounterList({counters}) {
  return (
    <div>
    Counters
    {counters.map((counter, i)=>{
        return (
            <div key={i} style={{border:"1px solid black", borderRadius:"5px"}}>
                <span class="counter-name">{counter.name}|</span>
                <div className="test">
                    {counter.labels.map((label, i)=>{
                        return <span key={i}>|{label}|</span>
                    })};
                </div>
  
            </div>
        );
    })}
</div>
  )
}


