import React from 'react'

export default function LabelDiv({labels, filter}) {
  return (
    <div>
        Label {filter}
        {labels.map((label, i)=>{
            return (
                <div key={i} style={{border:"1px solid black", borderRadius:"5px"}}>
                    <span>{label.name}|</span>
                    <span>{label.total}</span>
                </div>
            );
        })}
    </div>
    
  )
}
