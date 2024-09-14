
export default class Entry {
    constructor(name,labels,value,valueType,date){
        this.name=name;
        this.labels=labels;
        this.value=value || 1;
        this.date=date || new Date();
        
        if(valueType==1){
            this.valueType="action"
        }
        else if(valueType==2){
            this.valueType="time"
        }
        else if(valueType==3){
            this.valueType="threshhold"
        }else{
            this.valueType=valueType;
        }
    }

}