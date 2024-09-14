import user from "./User.js";

export default class CounterDiv {
    constructor(filter){
        this.filter=filter;
        
        this.counters=user.counters;
        this.buttons=[];
        // this.element=this.createElement();
        this.createButtons();
    }
    createButtons(){
        this.buttons=[];
        // Filter Counters
        if(this.filter){
            let filteredCounters=[]
            for(let i =0; i< this.counters.length; i++){
                if(this.counters[i].labels.includes(this.filter)){
                    filteredCounters.push(this.counters[i]);
                }
            }
            // console.log(filteredCounters)
            for(let i =0;i<filteredCounters.length;i++){
                this.createButton(filteredCounters[i])
            }
        }
        else{
            for(let i =0;i<this.counters.length;i++){
                this.createButton(this.counters[i])
            }
        }
    }
    createButton(counter){
        const button = document.createElement("button");
        button.classList.add("counter-btn");
                button.textContent=counter.name + "|";
                for(let j=0; j<counter.labels;j++){
                    button.textContent+=counter.labels[j] +"|";
                }
                button.addEventListener("click", ()=>{
                    let value=document.getElementById("divInput").value;
                    user.addEntry(counter.name,counter.labels,value);
                })
                this.buttons.push(button);
    }
    
    // createElement(){
    //     const element=document.createElement("div")
    //     element.appendChild();
    //     return element;
    // }
}