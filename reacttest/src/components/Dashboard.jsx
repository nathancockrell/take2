import React, {useState} from 'react'
import LabelDiv from './LabelDiv';

export default function Dashboard({user}) {
  console.log(user);
  
    const [counterDivs, setCounterDivs] = useState([]);
    const [labelDivs, setLabelDivs] = useState([]);

    function addLabelDiv() {
      const filter = prompt("filter");
      setLabelDivs((prev)=>{
        return [...prev, filter];
      });
    }

  return (
    <div>
    <div>Dashboard</div>
      <button onClick={addLabelDiv}>Add Label Div</button>
      {labelDivs.map((filter, i)=>{
        return (
          <LabelDiv key={i} 
          labels={user.labels.filter((label)=>{
            console.log(label.name,"test", filter);
            return label.name.includes(filter) || filter=="";
            // console.log(filter.length, "filter");
          })}
          filter={filter}
          ></LabelDiv>
        );
      })}
      
    </div>
  )
}
