import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import user from './models/User'
import Entries from './components/Entries'
import CounterList from './components/CounterList'
import Counter from './models/Counter'
import LabelDiv from './components/LabelDiv'
import ManageModal from './components/ManageModal'

function App() {
  const [myUser, setUser] = useState(user);
  const [entries, setEntries] = useState(user.entries);
  const [counters, setCounters] = useState(user.counters);
  const [labels, setLabels] = useState(user.labels);
  const [showManageModal, setShowManageModal] = useState(false);

  const [navigate, setNavigate] =useState("home");

  const [currentModalId, setCurrentModalId] = useState("entry0");

  const [dashboards,setDashboards] = useState(1);
  let activeWindow ="home"

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
  function nav(e){
    // document.getElementById(activeWindow+"-section").classList.add("hidden")
    activeWindow=e.target.id;
    setNavigate(activeWindow);
    // console.log(navigate)
    // document.getElementById(activeWindow+"-section").classList.remove("hidden")
  }
  function toggleModal(){
    setShowManageModal((prev)=>{
      return !prev;
    })
  }
  function openModal(id) {
    setCurrentModalId(id);
    toggleModal()
  }
  function loadModal(){
    document.getElementById("modal-contents").innerHTML = contents;
  }

  return (
    <div>
      <div id="navbar">
        <button onClick={nav} id="home">Home</button>
        <button onClick={nav} id="dashboards">Dashboards</button>
        <button onClick={nav} id="counters">Counters</button>
        <button onClick={nav} id="labels">Labels</button>
        <button onClick={nav} id="entries">Entries</button>
        <button onClick={nav} id="quests">Quests</button>
        <button onClick={nav} id="profile">Profile</button>
        <button onClick={toggleModal}>Modal</button>
      </div>

    {navigate=="home" && <div id="home-section">
    <div class="buttons-div">
    <button onClick={addDashboard}>Add Dashboard</button>
    </div>

    
    <div class="dashboards-div">
    {[...Array(dashboards)].map(i=>{
      return <Dashboard user={{entries:myUser.entries, counters:myUser.counters, labels:myUser.labels}} index={i}></Dashboard>
    })}
    </div>
  
    <div class="lists-div">
    <CounterList counters={myUser.counters}></CounterList>
    </div>
    </div>}

    {navigate=="dashboards" && <div id="dashboards-section">
      HELLO IM DASHBOARDS
    </div>}
    {navigate=="profile" && <div id="profile-section">
      HELLO IM profile
    </div>}
    {navigate=="quests" && <div id="quests-section">
      HELLO IM quests
    </div>}
    {navigate=="labels" && <div id="labels-section">
      <h1>All Labels</h1>
      <button onClick={addLabel}>Add Label</button>
      
      <LabelDiv labels={myUser.labels} openModal={openModal}></LabelDiv>
    </div>}
    {navigate=="counters" && <div id="counters-section">
      <h1>All Counters</h1>
      <button onClick={addCounter}>Add Counter</button>
      <CounterList counters={myUser.counters} openModal={openModal}></CounterList>
    </div>}
    {navigate=="entries" && <div id="entries-section">
      <h1>All Entries</h1>
      <button onClick={addEntry}>Add Entry</button>
      <Entries entries={myUser.entries} openModal={openModal}></Entries>
    </div>}

    {showManageModal && <div id="manage-modal-container">
      <div id="manage-modal">
        <button id="modal-close" onClick={toggleModal}>Close</button>
        <div id="modal-contents">
          <ManageModal id={currentModalId} user={myUser}></ManageModal>
        </div>
      </div>
    </div>}

    </div>
    
  )
}

export default App
