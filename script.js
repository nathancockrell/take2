import Entry from "./modules/Entry.js";
import Counter from "./modules/Counter.js";
import user from "./user.js";
import Label from "./modules/Label.js";


const addEntry = document.getElementById("addEntry")
const addLabel= document.getElementById("addLabel")
const addCounter = document.getElementById("addCounter")
const addCounterDiv = document.getElementById("addCounterDiv")
const val = document.getElementById("val")

const labelsDiv = document.getElementById("labelsDiv")
const counterDiv = document.getElementById("counterDiv")
const counterDivsDiv = document.getElementById("counterDivsDiv")
const entryDiv = document.getElementById("entryDiv")



addCounter.addEventListener("click", ()=>{
    const name = prompt("counter name")
    const label = prompt("label name")
    const labels =[];
    labels.push(label)
    const counter = new Counter(name, labels);
    user.addCounter(counter)
    loadDivs();
})

addEntry.addEventListener("click", ()=>{
    const name=prompt("enter title");
    const value = val.value || 1;
    const label = prompt("label name")
    const labels =[];
    labels.push(label)
    user.addEntry(name,labels,value);
    val.value="";
    loadDivs();
})

addLabel.addEventListener("click", ()=>{
    const name = prompt("label name");
    if(user.labels.find(x=>x.name==name)){
        alert("cannot duplicate label");
    }else {
        user.addLabel(name);
    }
    loadDivs();
})

addCounterDiv.addEventListener("click", ()=>{
    const filter = prompt("enter label apply filter");
    if(filter){
        user.addCounterDiv(filter);
    }else{
        user.addCounterDiv();
    }
    loadDivs();
});



export function loadDivs(){
    user.updateLabels();
    labelsDiv.innerHTML=``;
    for(let i=0; i<user.labels.length; i++){
        const div = document.createElement("div");
        div.style.border="1px solid black";
        div.style.borderRadius="5px";
        const name = document.createElement("span");
        name.textContent=user.labels[i].name +" |";
        div.appendChild(name);
        const total = document.createElement("span");
        total.textContent="#: "+user.labels[i].total;
        div.appendChild(total);
        labelsDiv.appendChild(div);
    }

    counterDiv.innerHTML=``;
    for(let i=0; i<user.counters.length; i++){
        const div = document.createElement("div");
        div.style.border="1px solid black";
        div.style.borderRadius="5px";
        const name = document.createElement("span");
        name.textContent=user.counters[i].name +" |";
        div.appendChild(name);
        const labels = document.createElement("div");
        labels.classList.add("test")
        for(let j =0;j<user.counters[i].labels.length; j++){
            const label = document.createElement("span");
            label.textContent="|"+user.counters[i].labels[j]+"|"
            labels.appendChild(label);
        }
        div.appendChild(labels);
        const amount = document.createElement("span");
        amount.textContent=user.counters[i].amount;
        div.appendChild(amount);
        counterDiv.appendChild(div);
    }

    entryDiv.innerHTML=``;
    for(let i=0; i<user.stats.length; i++){
        const div = document.createElement("div");
        div.style.border="1px solid black";
        div.style.borderRadius="5px";
        const name = document.createElement("span");
        name.textContent=user.stats[i].name +" |";
        div.appendChild(name);
        const labels = document.createElement("div");
        labels.classList.add("test")
        for(let j =0;j<user.stats[i].labels.length; j++){
            const label = document.createElement("span");
            label.textContent="|"+user.stats[i].labels[j]+"|"
            labels.appendChild(label);
        }
        div.appendChild(labels);
        const date = document.createElement("span");
        date.textContent=user.stats[i].date +" |";
        div.appendChild(date);
        const val = document.createElement("span");
        val.textContent=user.stats[i].value;
        div.appendChild(val);
        entryDiv.appendChild(div);
    }

    counterDivsDiv.innerHTML='';
    for(let i=0; i<user.counterDivs.length; i++){
        user.counterDivs[i].createButtons();
        const div = document.createElement("div");
        div.style.border="1px solid black";
        div.style.borderRadius="5px";
        const title = document.createElement("h2");
        let filter;
        if(user.counterDivs[i].filter){
            filter=user.counterDivs[i].filter;
        }else{
            filter = "none";
        }
        title.textContent="Counter Div "+(i+1) + " filter: "+filter;
        div.appendChild(title)
        for(let j = 0; j<user.counterDivs[i].buttons.length;j++){
            div.appendChild(user.counterDivs[i].buttons[j])
        }
        counterDivsDiv.appendChild(div);
    }

    let cbuttons = document.querySelectorAll("counter-btn");
    console.log(cbuttons)
        cbuttons.forEach((btn)=>{
            btn.addEventListener("click",()=>{
            loadDivs();
        })
    })
    
    // parseStatistics(statistics);
    console.log(user)
}

function parseStatistics(statistics){
    for(let i =0;i<statistics.length;i++){
        console.log(statistics[i].date-1)
    }
    // if date is more than a week ago combine it with all similar dates in that 4 hour period of the day
}