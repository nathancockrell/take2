import React from 'react'

export default function LabelDiv({labels, filter, openModal}) {
  return (
    <div>
        <span style={{color:"grey"}}>Label {filter}</span>
        {labels.map((label, i)=>{
            return (
                <div key={i} onClick={()=>{openModal("l"+i)}}style={{border:"1px solid black", borderRadius:"5px", padding:"1rem", cursor:"pointer"}}>
                    <span>{label.name}|</span>
                    <span>{label.total}</span>
                </div>
            );
        })}
    </div>
  )
}
