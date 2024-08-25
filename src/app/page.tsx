'use client';
import Image from "next/image";
import {useState} from 'react'
export default function Home() {
  // set states 
const [todo, setTodo] = useState([{name:"Baghbaan",id:1},{name:"Catch me if you can",id:2}])
const [inputVal, setInputVal] = useState("")
const [id, setId] = useState(0)
//functions
const addMovie = ()=>{
  let obj= todo.find(item=> item.id == id)
  if(obj){
    let newTodo = todo.filter(item=> item.id !== obj.id)
    setTodo([...newTodo,{name:inputVal,id:id}])
setInputVal("")
setId(0)
return
  } 
}

const delItem = (id:any)=>{
  let newTodo = todo.filter(item=> item.id !== id)
  setTodo([...newTodo])
}
const editItem = (id:any)=>{
let obj:any = todo.find((item)=>item.id == id) 
setInputVal(obj.name)
setId(obj.id)
}

  return (
    <> 
   <div className="max-w-sm bg-red-800 m-6 mx-auto rounded-lg">
<h1 className="text-center text-[50px] hover:text-white">
  ToDo App</h1>
  </div>
  <div className="flex justify-between gap-4 m-16" > 
  <input value={inputVal} 
  type="text" onChange={(e)=>setInputVal(e.target.value)}
  placeholder=" Please enter movie name"
  className="text-left ml-64 w-[60%]     "
  />
  <input type="number"
  value={id} onChange={(e:any)=>setId(e.target.value)}
  placeholder="write id"
  className="w-[20%] text-lg p-2 ml-3"/>
  <button className=" bg-blue-600 w-[150px] rounded-md mr-60
   hover:text-white py-4 " onClick={addMovie}>Add Movie</button>
  </div>
  <h1 className="text-center text-[40px] underline mt-4
   hover:bg-red-800 max-w-sm mx-auto rounded-lg
   hover:text-white">Movies List</h1>
  <div className="grid grid-cols-2 gap-5 mt-5 ml-20">
    {todo.map((item:any,i:any)=>{
      return(
        <div className="shadow p-4 rounded-md" key={i}>
        <div className="flex justify-between ">
         <span className="shadow rounded-full h-8 w-8 mt-6 text-center text-red-600 ">
           SN:{i+1}</span>
         <button className="mt-6 text-center cursor-pointer hover:underline
          hover:text-blue-600 " onClick= {()=>delItem(item.id)}>Delete</button>
        </div>
        <div className="mt-5 text-blue-700 text-[30px]">{item.name} 

        </div>
        <div>
         <h1 className="text-right cursor-pointer hover:underline
          hover:text-blue-600" onClick= {()=>editItem(item.id)}>Edit</h1>
          <h1 className="text-green-600">Id : {item.id}</h1>
        </div>
       </div>
      )
    } )   
  }
  
  </div>
  </>
  );
}
   