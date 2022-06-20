
import { useEffect } from "react";
import { useState } from "react";

import "./bootsrap.css";
import "./App.css";
import Create from "./Components/Create";
import DataContext from "./Components/DataContext";
import List from "./Components/List";
import axios from "axios";
import Edit from "./Components/Edit";


function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [modalData, setModalData] = useState(null);

  const [animals, setAnimals] = useState([]);
  const [createAnimal, setCreateAnimal] = useState(null);

  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  

  useEffect (() =>{
     axios.get('http://localhost/tvartas_front_back/server_Tvartas/animals')
     .then(res => setAnimals(res.data));
  }, [lastUpdate]);

  useEffect(() => {
    if(null === createAnimal) return;
    axios.post('http://localhost/tvartas_front_back/server_Tvartas/animals', createAnimal)
      .then(_ => {
        setLastUpdate(Date.now());
      });
  }, [createAnimal]);

  useEffect(() => {
    if (null === deleteData) return;
    axios.delete('http://localhost/tvartas_front_back/server_Tvartas/animals/' + deleteData)
    .then(_ => {
      
      setLastUpdate(Date.now());
    });
  }, [deleteData]);
 

  useEffect(() => {
    console.log(editData);
    if (null === editData) return;
    axios.put('http://localhost/tvartas_front_back/server_Tvartas/animals/' + editData.id, editData)
    .then(_ => {
      setLastUpdate(Date.now());
    });
  }, [editData]);

  return (
    <DataContext.Provider value={{animals, setCreateAnimal, setDeleteData, setModalData, modalData, setEditData}}>
      <div className="container">
        <div className="row">
          <Create />
          <List />
        </div>
      </div>
      <Edit setEditData={setEditData} modalData={modalData} setModalData={setModalData}></Edit>
    </DataContext.Provider>
  );
}

export default App;
