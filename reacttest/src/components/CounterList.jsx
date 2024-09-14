import React from 'react'

export default function CounterList({counters}) {
  return (
    <div>
    Counters
    {counters.map((counter, i)=>{
        return (
            <div key={i} style={{border:"1px solid black", borderRadius:"5px"}}>
                <span>{counter.name}|</span>
                <div className="test">
                    {counter.labels.map((label, i)=>{
                        return <span key={i}>|{label}|</span>
                    })};
                </div>
                <span>{counter.amount}</span>
  
            </div>
        );
    })}
</div>
  )
}


