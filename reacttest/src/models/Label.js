import user from "./User.js";

export default class Label {
    constructor(name){
        this.name = name;
        this.children=[];
        this.sublabels=[];
        this.total=0;
    }

    updateTotal(){
        this.total=0;
        for(let i=0;i<user.entries.length;i++){
            if(user.entries[i].labels.includes(this.name)){
                this.total+=user.entries[i].value;
            };
            
        }
    }
}