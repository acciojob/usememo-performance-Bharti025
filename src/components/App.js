
import React,{useState,useEffect,useMemo} from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData]=useState([]);
   const [filter, setFilter] = useState("all");
  const todos=[
    {id:1, title:"Todo 1", completed:true},
    {id:2, title:"Todo 2", completed:false},
    {id:3, title:"Todo 3", completed:false},
    {id:4, title:"Todo 4", completed:false},
    {id:5, title:"Todo 5", completed:true},
    {id:6, title:"Todo 6", completed:true},
    {id:7, title:"Todo 7", completed:false},
    {id:8, title:"Todo 8", completed:true},
    {id:9, title:"Todo 9", completed:false},
    {id:10, title:"Todo 10", completed:false},
    {id:11, title:"Todo 11", completed:true},
    {id:12, title:"Todo 12", completed:false},
    {id:13, title:"Todo 13", completed:true},
    {id:14, title:"Todo 14", completed:false},
    {id:15, title:"Todo 15", completed:true},
    {id:16, title:"Todo 16", completed:true},
    {id:17, title:"Todo 17", completed:false},
    {id:18, title:"Todo 18", completed:true},
    {id:19, title:"Todo 19", completed:false},
    {id:20, title:"Todo 20", completed:false},
    {id:21, title:"Todo 21", completed:true},
    {id:22, title:"Todo 22", completed:false},
    {id:23, title:"Todo 23", completed:true},
    {id:24, title:"Todo 24", completed:false},
    {id:25, title:"Todo 25", completed:true},
    {id:26, title:"Todo 26", completed:true},
    {id:27, title:"Todo 27", completed:false},
    {id:28, title:"Todo 28", completed:true},
    {id:29, title:"Todo 29", completed:false},
    {id:30, title:"Todo 30", completed:true},
    {id:31, title:"Todo 31", completed:false},
    {id:32, title:"Todo 32", completed:false},
    {id:33, title:"Todo 33", completed:true},
    {id:34, title:"Todo 34", completed:false},
    {id:35, title:"Todo 35", completed:true},
    {id:36, title:"Todo 36", completed:false},
    {id:37, title:"Todo 37", completed:false},
    {id:38, title:"Todo 38", completed:true},
    {id:39, title:"Todo 39", completed:true},
    {id:40, title:"Todo 40", completed:true},
    {id:41, title:"Todo 41", completed:true},
    {id:42, title:"Todo 42", completed:true},
    {id:43, title:"Todo 43", completed:true},
    {id:44, title:"Todo 44", completed:true},
    {id:45, title:"Todo 45", completed:true},
    {id:46, title:"Todo 46", completed:true},
    {id:47, title:"Todo 47", completed:true},
    {id:48, title:"Todo 48", completed:true},
    {id:49, title:"Todo 49", completed:true},
    {id:50, title:"Todo 50", completed:true}
  ]
  useEffect(()=>{
    setData(todos);
  },[])

    const filteredTasks = useMemo(() => {
       let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Block for 500ms
  }
    if (filter === "all") return data;
    if (filter === "active") return data.filter((item) => !item.completed);
    if (filter === "completed") return data.filter((item) => item.completed);
  }, [filter, data]);

  return (
    <div>
    <div>
      <button onClick={()=>setFilter("all")}>All</button>
      <button onClick={()=>setFilter("active")}>Active</button>
      <button onClick={()=>setFilter("completed")}>Completed</button>
      <hr></hr>
      <ul>
      {filteredTasks.map((item)=>
      <li key={item.id}  className={item.completed?"completed":""}>{item.title}</li>
     )}
     </ul>
    </div>
    </div>
  )
}

export default App
