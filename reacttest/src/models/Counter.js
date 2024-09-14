import Entry from "./Entry.js";

export default class Counter {
    constructor(name,labels){
        this.name=name;
        this.labels=labels;
        this.count=0;
    }

    newEntry(value){
        const val = value || 1;
        const entry = new Entry(this.name,this.labels,val);
        return entry;
    }
    increaseCount(amount){
        const inc = amount || 1;
        this.count+=inc;
    }
};