import React from 'react'

export default function Entries({entries}) {
  return (
    <div>
    Entries
    {entries.map((entry, i)=>{
        return (
            <div key={i} style={{border:"1px solid black", borderRadius:"5px"}}>
                <span>{entry.name}|</span>
                <div className="test">
                    {entry.labels.map((label, i)=>{
                        return <span key={i}>|{label}|</span>
                    })};
                </div>
                <span>{entry.value}</span>
            </div>
        );
    })}
</div>
  )
}
