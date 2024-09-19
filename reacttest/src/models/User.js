import Label from "./Label.js";
import Entry from "./Entry.js";
import CounterDiv from "./CounterDiv.js";

class User {
    constructor(){
        this.counters=[];
        this.labels=[];
        this.entries=[];
        this.counterDivs=[];
        this.dashboards=[];
    }
    addCounter(counter){
        this.counters.push(counter);
    }
    addLabel(name){
        const label = new Label(name);
        this.labels.push(label);
    }
    addEntry(name,labels,value){
        let labels1=[];
        if(Array.isArray(labels)){
            labels1=labels;
        }else{
            labels1.push(labels);
        }
        const stat = new Entry(name,labels1,value)
        this.entries.push(stat);
    }
    addCounterDiv(filter){
        const div = new CounterDiv(filter);
        this.counterDivs.push(div);
    }

    updateLabels(){
        // Automatically add new label from entries
        for(let i =0;i<this.entries.length;i++){
            for(let j =0;j<this.entries[i].labels.length;j++){
                if(!this.labels.find(x=>x.name==this.entries[i].labels[j])){
                    const label = new Label(this.entries[i].labels[j])
                    
                    this.labels.push(label)
                }else{
                    console.log("not new");
                }
            }
        }
        // Automatically add new label from counters (just copy and paste pretty much)
        for(let i =0;i<this.counters.length;i++){
            for(let j =0;j<this.counters[i].labels.length;j++){
                    console.log("this.labels", this.labels)
                    console.log("entries[i].LABELs", this.counters[i].labels);
                if(!this.labels.find(x=>x.name==this.counters[i].labels[j])){
                    const label = new Label(this.counters[i].labels[j])
                    
                    this.labels.push(label)
                }else{
                    console.log("not new");
                }
            }
        }
        // Update Label Tota-- ACTUALLY that's in the label.js
        for(let i =0;i<this.labels.length;i++){
            this.labels[i].updateTotal();
        }
    }
    updateCounters(){

    }
}
const user = new User();
export default user;