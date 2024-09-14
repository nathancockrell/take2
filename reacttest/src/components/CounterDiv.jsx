import React from 'react'

export default function counterDiv({counters, filter}) {
  return (
    <div  class="counters-div">
        Counters {filter}
        {counters.map((counter, i)=>{
            return (
                <div key={i}>
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
