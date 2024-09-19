import React from 'react'
import ManageModal from './ManageModal';

export default function Entries({entries, openModal}) {

  return (
    <div>
    <span style={{color:"grey"}}>Entries</span>
    {entries.map((entry, i)=>{
        return (
            <div key={i} onClick={()=>{openModal("e"+i)}} id={"entry"+i} style={{border:"1px solid black", borderRadius:"5px",cursor:"pointer"}}>
                <span>{entry.name}|</span>
                <div className="test">
                    {entry.labels.map((label, j)=>{
                        return <span key={j}>|{label}|</span>
                    })};
                </div>
                <span>{entry.value}</span>
            </div>
        );
    })}
</div>
  )
}
