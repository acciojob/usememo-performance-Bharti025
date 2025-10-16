
import React,{useState,useEffect,useMemo} from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData]=useState([]);
   const [filter, setFilter] = useState("all");
  const todos=[
    {id:1, title:"Task 1", completed:true},
    {id:2, title:"Task 2", completed:false},
    {id:3, title:"Task 3", completed:true},
    {id:4, title:"Task 4", completed:false},
    {id:5, title:"Task 5", completed:true},
    {id:6, title:"Task 6", completed:true},
    {id:7, title:"Task 7", completed:false},
    {id:8, title:"Task 8", completed:true},
    {id:9, title:"Task 9", completed:false},
    {id:10, title:"Task 10", completed:true},
    {id:11, title:"Task 11", completed:true},
    {id:12, title:"Task 12", completed:false},
    {id:13, title:"Task 13", completed:true},
    {id:14, title:"Task 14", completed:false},
    {id:15, title:"Task 15", completed:true},
    {id:16, title:"Task 16", completed:true},
    {id:17, title:"Task 17", completed:false},
    {id:18, title:"Task 18", completed:true},
    {id:19, title:"Task 19", completed:false},
    {id:20, title:"Task 20", completed:true},
    {id:21, title:"Task 21", completed:true},
    {id:22, title:"Task 22", completed:false},
    {id:23, title:"Task 23", completed:true},
    {id:24, title:"Task 24", completed:false},
    {id:25, title:"Task 25", completed:true},
    {id:26, title:"Task 26", completed:true},
    {id:27, title:"Task 27", completed:false},
    {id:28, title:"Task 28", completed:true},
    {id:29, title:"Task 29", completed:false},
    {id:30, title:"Task 30", completed:true},
    {id:31, title:"Task 31", completed:true},
    {id:32, title:"Task 32", completed:false},
    {id:33, title:"Task 33", completed:true},
    {id:34, title:"Task 34", completed:false},
    {id:35, title:"Task 35", completed:true},
    {id:36, title:"Task 36", completed:true},
    {id:37, title:"Task 37", completed:false},
    {id:38, title:"Task 38", completed:true},
    {id:39, title:"Task 39", completed:false},
    {id:40, title:"Task 40", completed:true},
    {id:41, title:"Task 41", completed:true},
    {id:42, title:"Task 42", completed:false},
    {id:43, title:"Task 43", completed:true},
    {id:44, title:"Task 44", completed:false},
    {id:45, title:"Task 45", completed:true},
    {id:46, title:"Task 46", completed:true},
    {id:47, title:"Task 47", completed:false},
    {id:48, title:"Task 48", completed:true},
    {id:49, title:"Task 49", completed:false},
    {id:50, title:"Task 50", completed:true}
  ]
  useEffect(()=>{
    setData(todos);
  },[])

    const filteredTasks = useMemo(() => {
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
