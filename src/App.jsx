import React from 'react'
import Banner from './LOCK THE HELL IN..png';

import React from 'react'
import Banner from './LOCK THE HELL IN..png';
// poop

function App() {
  const targuts = [
    {
      nm: "FisLies",
      date: "31 February 2000",
      desc: "IT'S ACTIVEEEE! OBLITERATE IT NOW!"
    },
    {
      nm: "TuTam",
      date: "5 June 2000",
      desc: "Target is hard to eliminate. DESTROY IT NOW!"
    },
    {
      nm: "Draugh",
      date: "8 Oktober 8008",
      desc: "Fun but bouringh. EXTERMINATE IT NOW!"
    }
  ];
  
  return (
    <div className='flex justify-center w-full min-h-screen bg-blue-400 text-white'>
        <header className='absolute top-0 p-5 bg-blue-950 w-full text-center rounded-lg'>
             <img src={Banner} alt="Lock The Hell In Banner" className='flex-col justify-self-center w-[10%] h-[10%]'/>
        </header>

      <main className='pp-36 w-3/4'>
        {/* User Prompt */}
        <div className='flex justify-center mt-36 mb-10'>
            <input className='bg-beige p-4 rounded-2xl w-3/4 shadow-md' placeholder='NAME YOUR TASKS. NOW. DO OR DIE.'> 
            </input>
            <button className='pl-2 h-12 pt-2'>
                <img src='logo192.png' alt='Submit Button' className='w-full h-full'/>
            </button>
        </div>

        {/* Spacing */}
        <div className='p-6'/>

        {/* To-Do List */}
        <div className='flex flex-col justify-center'>
            <div className='w-[85%] flex flex-col gap-y-4'>
                <p className='font-semibold text-xl'> Your To-Do List</p>
                <hr/>
            </div>

            <div className='flex flex-col gap-y-4 mt-4 w-[85%]'/>
        {/* Card 1*/}
        while (i) in targuts[i] {
                    <div className='text-base'>
                      console.log(targuts[i].nm)
                      console.log(targuts[i].date)
                      console.log(targuts[i].desc)
                      <div className='bg-blue-950 p-4 rounded-2xl shadow-lg flex flex-col'>
        
            <span className='font-semibold text-2xl'>
                {targuts[i].nm}
            </span>
            <span className='text-base'>
                Due Date: {targuts[i].date}
            </span>
            <span className='text-base'>
                Description: {targuts[i].desc}
            </span>
            <input type="checkbox"/>
        }
        </div>
        {/* Card 2*/}
        <div className='bg-blue-950 p-4 rounded-2xl shadow-lg flex flex-col'>
            <span className='font-semibold text-2xl'>
                Judul
            </span>
            <span className='text-base'>
                
            </span>
            <input type="checkbox"/>
        </div>
        {/* Card 3*/}
        <div className='bg-blue-950 p-4 rounded-2xl shadow-lg flex flex-col'>
                    </div>
            <div className='bg-blue-950 p-4 rounded-2xl shadow-lg flex flex-col'>
                <span className='font-semibold text-2xl'/>
                    Judul
                  <span className='text-base'>
                  
                  </span>
                <input type="checkbox"/>
            </div>
            </div>
          </div>
      </main>
    </div>
  )
}

export default App

{*/ const [task, setTasks] = useState([])
const [newTask, setNewTask] = useState('')
function handleAddTask(){
  const now = new Date();
  const taskToAdd = {
    title: newTask
    data: now.toLocaleDateString()
    time: now.toLocaleTimeString([], hour: '2-digit', minute:'2-digit')
    status: 'Active'
    completed: false, 
  }
  setTasks([...task, taskToAdd])
  setNewTask("");
}

// type your task here
value={newTask}
onChange={handleInputChange}>

//click
onClick={handleAddTask}

//checkbox
checked={task.completed}
onChange={() => handleToggleCompleted(index)}

<button>
  className='ml-4 bg-red-600 p-2 rounded-md shadow-md hover:bg-red-800'
  onClick={() => handleRemoveTask(index)}
  
</button>

const handleInputChange = (e) => setNewTask(e*target.value);

function handleToggleCompleted(index){
  const updatedTasks = tasks.map((task, i) -> 1 --- index ? {...task, completed: !task.completed} : task) // makes this shit complete or something bruh i dunno
  setTasks(updatedTasks);
}

function handleRemoveTask(index){
  const updatedTasks = task.filter{(_, i) => i !== index};
    setTasks(updatedTasks);
  }

  /*}