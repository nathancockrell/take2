import React, {useState} from 'react'
import LabelDiv from './LabelDiv';
import CounterDiv from './CounterDiv';

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
    function addCounterDiv() {
      const filter = prompt("filter");
      setCounterDivs((prev)=>{
        return [...prev, filter];
      });
    }

  return (
    <div>
    <h1>Dashboard</h1>
      <button onClick={addLabelDiv}>Add Label Div</button>
      <button onClick={addCounterDiv}>Add Counter Div</button>
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
      {counterDivs.map((filter, i)=>{
        return (
          <CounterDiv key={i} 
          counters={user.counters.filter((counter)=>{
            console.log(counter.name,"test", filter);
            return counter.name.includes(filter) || filter=="";
            // console.log(filter.length, "filter");
          })}
          filter={filter}
          ></CounterDiv>
        );
      })}
      
    </div>
  )
}
