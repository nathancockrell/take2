import React from 'react'

export default function ManageModal({id, user}) {

    let title;
    let name;
    let number;
    let labels;

    if(id){
      const type = id.slice(0, 1);
      const index = Number(id.slice(1,id.length));
      if(type=="e") {
        title="Entry"
        const entry = user.entries[index];
        if(entry) {
        name = entry.name;
        number = entry.value;
        }
      }else if(type=="c"){
        title="Counter";
        const counter = user.counters[index];
        if(counter){
          name=counter.name;
          number=counter.count;
        }
      }else if(type=="l"){
        title="Label";
        const label= user.labels[index];
        if(label){
          name=label.name;
          number=label.total;
        }
      }
    }else{
      console.log(id)
      console.log("NO id")
    }
    // console.log("id", id)
    // title="entry";
    // name=user.entries[key].name;
    return(
      <div>
      <p>{title}</p>
      <h3>{name}</h3>
      <span>{number}</span>
      </div>
    )

}
