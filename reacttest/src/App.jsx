import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import user from './models/User'
import Entries from './components/Entries'
import CounterList from './components/CounterList'
import Counter from './models/Counter'

function App() {
  const [myUser, setUser] = useState(user);
  const [entries, setEntries] = useState(user.stats);
  const [counters, setCounters] = useState(user.counters);
  const [labels, setLabels] = useState(user.labels);

  const [dashboards,setDashboards] = useState(1);

  function addLabel() {
    const name = prompt("label name");
    if(user.labels.find(x=>x.name==name)){
        alert("cannot duplicate label");
    }else {

      
        user.addLabel(name);
        console.log(user.labels);
        console.log(labels);
        
        
        
        setUser({...user});
    }
  }

  function addEntry() {
    const name=prompt("enter title");
    const value = 1;
    const label = prompt("label name")
    const labels =[];
    labels.push(label)
    user.addEntry(name,labels,value);
    user.updateLabels();
    setUser({...user});
   
  }

  function addCounter() {
    const name = prompt("counter name")
    const label = prompt("label name")
    const labels =[];
    labels.push(label)
    const counter = new Counter(name, labels);
    user.addCounter(counter);
    setUser({...user});
  }

  function addDashboard() {
    setDashboards(prev=>prev+1);
  }
  function showHome(){
    console.log("showhome")
  }

  return (
    <div>
      <div id="navbar">
        <button onClick={showHome}>Home</button>
        <button onClick={showHome}>Dashboards</button>
        <button onClick={showHome}>Quests</button>
        <button onClick={showHome}>Profile</button>
      </div>

    <div id="main-div">
    <div class="buttons-div">
    <button onClick={addLabel}>Add Label</button>
    <button onClick={addEntry}>Add Entry</button>
    <button onClick={addCounter}>Add Counter</button>
    <button onClick={addDashboard}>Add Dashboard</button>
    </div>
    
    <div class="dashboards-div">
    {[...Array(dashboards)].map(i=>{
      return <Dashboard user={{entries:myUser.stats, counters:myUser.counters, labels:myUser.labels}}></Dashboard>
    })}
    </div>
  
    <div class="lists-div">
    <CounterList counters={myUser.counters}></CounterList>
    <Entries entries={myUser.stats}></Entries>
    </div>
    </div>

    </div>
    
  )
}

export default App
