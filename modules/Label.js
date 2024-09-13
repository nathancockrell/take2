import user from "../user.js";

export default class Label {
    constructor(name){
        this.name = name;
        this.children=[];
        this.sublabels=[];
        this.total=0;
    }

    updateTotal(){
        this.total=0;
        for(let i=0;i<user.stats.length;i++){
            if(user.stats[i].labels.includes(this.name)){
                this.total+=user.stats[i].value;
            };
            
        }
    }
}