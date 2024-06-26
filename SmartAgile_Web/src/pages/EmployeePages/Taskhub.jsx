// // import React, { useCallback, useEffect, useState } from 'react';
// // // import debounce from 'lodash.debounce';
// // import { DndProvider, useDrag, useDrop } from 'react-dnd';
// // import { HTML5Backend } from 'react-dnd-html5-backend';

// // const Taskhub = () => {
// //   const [tasks, setTasks] = useState([]); // State to store tasks
// //   const [selectedStatus, setSelectedStatus] = useState('All'); // State to filter tasks by status

// //   // Fetch tasks from the backend when the component mounts
// //   useEffect(() => {
// //     const fetchTasks = async () => {
// //       try {
// //         const taskResponse = await fetch('http://127.0.0.1:8000/tasks/');
// //         if (!taskResponse.ok) {
// //           throw new Error('Failed to fetch tasks');
// //         }
// //         const taskData = await taskResponse.json();
// //         setTasks(taskData);
// //       } catch (error) {
// //         console.error('Error fetching tasks:', error);
// //       }
// //     };

// //     fetchTasks();
// //   }, []);

// //   // Load tasks from localStorage when the component mounts
// //   useEffect(() => {
// //     const savedTasks = localStorage.getItem('tasks');
// //     if (savedTasks) {
// //       setTasks(JSON.parse(savedTasks));
// //     }
// //   }, []);

// //   const statuses = ['todo', 'inProgress', 'completed']; // Different task statuses

// //   // Section component to display tasks of a specific status
// //   const Section = ({ status, tasks, setTasks }) => {
// //     const [{ isOver }, drop] = useDrop({
// //       accept: 'task',
// //       drop: (item) => addItemToSection(item.id, status),
// //       collect: (monitor) => ({
// //         isOver: !!monitor.isOver(),
// //       }),
// //     });

// //     // Function to update task status when dropped in a section
// //     const addItemToSection = (id, sectionStatus) => {
// //       setTasks((prevTasks) => {
// //         const updatedTasks = prevTasks.map((task) =>
// //           task.id === id ? { ...task, status: sectionStatus } : task
// //         );

// //         localStorage.setItem('tasks', JSON.stringify(updatedTasks));

// //         return updatedTasks;
// //       });
// //     };

// //     // Filter tasks for this section
// //     const sectionTasks = tasks.filter((task) => task.status === status);

// //     return (
// //       <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-200' : ''}`}>
// //         <Header text={status} bg="bg-gray-200" count={sectionTasks.length} />
// //         {sectionTasks.map((task) => (
// //           <Task key={task.id} task={task} />
// //         ))}
// //       </div>
// //     );
// //   };

// //   // Header component for section title and task count
// //   const Header = ({ text, bg, count }) => (
// //     <div className={`${bg} flex text-black items-center h-12 pl-4 rounded-md uppercase text-sm`}>
// //       {text}
// //       <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
// //         {count}
// //       </div>
// //     </div>
// //   );

// //   // Task component to display individual task details
// //   const Task = ({ task }) => {
// //     const [{ isDragging }, drag] = useDrag({
// //       type: 'task',
// //       item: { id: task.id },
// //       collect: (monitor) => ({
// //         isDragging: !!monitor.isDragging(),
// //       }),
// //     });

// //     // Function to remove a task
// //     const handleRemove = (id) => {
// //       const updatedTasks = tasks.filter((t) => t.id !== id);
// //       localStorage.setItem('tasks', JSON.stringify(updatedTasks));
// //       setTasks(updatedTasks);
// //     };

// //     return (
// //       <div
// //         ref={drag}
// //         className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging ? 'opacity-20' : 'opacity-100'}`}
// //       >
// //         <p>{task.task_name}</p>
// //         <button className="absolute bottom-1 right-1 text-slate-400" onClick={() => handleRemove(task.id)}>
// //           Remove
// //         </button>
// //       </div>
// //     );
// //   };

// //   // Filter tasks based on the selected status
// //   const filteredTasks = tasks.filter((task) => selectedStatus === 'All' || task.status === selectedStatus);

// //   return (
// //     <DndProvider backend={HTML5Backend}>
// //       <div className="flex h-screen">
// //         <div className="flex flex-col flex-grow overflow-y-auto">
// //           <div className="p-4">
// //             <h1 className="text-3xl font-bold mb-4 mt-4">Task Status</h1>

// //             <div className="flex flex-wrap ml-3 justify-start gap-10">
// //               {statuses.map((status) => (
// //                 <Section key={status} status={status} tasks={tasks} setTasks={setTasks} />
// //               ))}
// //             </div>

// //             <div className="flex flex-col mt-4" draggable>
// //               {filteredTasks.map((task) => (
// //                 <div
// //                   key={task.id}
// //                   className="card mb-3 mt-2 task-card relative rounded-[19px] ml-4 pt-1 pb-2 shadow-lg bg-white max-w-[255px]"
// //                 >
// //                   <h2 className="text-xl font-bold pt-4 pl-2 mb-2">{task.task_name}</h2>
// //                   <div className="text-sm text-gray-600 pl-3 mb-2">Deadline: {task.task_deadline}</div>
// //                   <p className="text-gray-700 pl-3">{task.task_desc}</p>
// //                   <div className="flex justify-between mb-0 mt-1 pl-2 pr-1 relative">
// //                     <button className="priority text-[14px] font-serif rounded-full p-0 pl-1 pr-1 mt-3 bg-yellow-300">
// //                       {task.task_priority}
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </DndProvider>
// //   );
// // };

// // export default Taskhub;





// import React, { useEffect, useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

// const Taskhub = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState('All');
//   const userId = JSON.parse(localStorage.getItem('user_id')); // Assuming user ID is stored in localStorage

//   useEffect(() => {
//     const fetchUserProjects = async () => {
//       try {
//         const projectResponse = await fetch(`http://127.0.0.1:8000/projects/user-projects/${userId}/`);
//         if (!projectResponse.ok) {
//           throw new Error('Failed to fetch projects');
//         }
//         const projectData = await projectResponse.json();
//         return projectData;
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//         return [];
//       }
//     };

//     const fetchTasksForProject = async (projectId) => {
//       try {
//         const taskResponse = await fetch(`http://127.0.0.1:8000/tasks/projects/user-task-data/2/${userId}/`);
//         if (!taskResponse.ok) {
//           throw new Error('Failed to fetch tasks for project ' + projectId);
//         }
//         const taskData = await taskResponse.json();
//         return taskData;
//       } catch (error) {
//         console.error('Error fetching tasks for project:', error);
//         return [];
//       }
//     };

//     const fetchTasks = async () => {
//       const projects = await fetchUserProjects();
//       const allTasks = [];

//       for (const project of projects) {
//         const projectTasks = await fetchTasksForProject(project.id);
//         allTasks.push(...projectTasks);
//       }

//       setTasks(allTasks);
//     };

//     fetchTasks();
//   }, [userId]);

//   useEffect(() => {
//     const savedTasks = localStorage.getItem('tasks');
//     if (savedTasks) {
//       setTasks(JSON.parse(savedTasks));
//     }
//   }, []);

//   const statuses = ['todo', 'inProgress', 'completed'];

//   const Section = ({ status, tasks, setTasks }) => {
//     const [{ isOver }, drop] = useDrop({
//       accept: 'task',
//       drop: (item) => addItemToSection(item.id, status),
//       collect: (monitor) => ({
//         isOver: !!monitor.isOver(),
//       }),
//     });

//     const addItemToSection = (id, sectionStatus) => {
//       setTasks((prevTasks) => {
//         const updatedTasks = prevTasks.map((task) =>
//           task.id === id ? { ...task, status: sectionStatus } : task
//         );

//         localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//         return updatedTasks;
//       });
//     };

//     const sectionTasks = tasks.filter((task) => task.status === status);

//     return (
//       <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-200' : ''}`}>
//         <Header text={status} bg="bg-gray-200" count={sectionTasks.length} />
//         {sectionTasks.map((task) => (
//           <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
//         ))}
//       </div>
//     );
//   };

//   const Header = ({ text, bg, count }) => (
//     <div className={`${bg} flex text-black items-center h-12 pl-4 rounded-md uppercase text-sm`}>
//       {text}
//       <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
//         {count}
//       </div>
//     </div>
//   );

//   const Task = ({ task, tasks, setTasks }) => {
//     const [{ isDragging }, drag] = useDrag({
//       type: 'task',
//       item: { id: task.id },
//       collect: (monitor) => ({
//         isDragging: !!monitor.isDragging(),
//       }),
//     });

//     const handleRemove = async (id) => {
//       try {
//         await fetch(`http://127.0.0.1:8000/tasks/${id}/`, {
//           method: 'DELETE',
//         });
//         const updatedTasks = tasks.filter((t) => t.id !== id);
//         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//         setTasks(updatedTasks);
//       } catch (error) {
//         console.error('Error deleting task:', error);
//       }
//     };

//     return (
//       <div
//         ref={drag}
//         className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging ? 'opacity-20' : 'opacity-100'}`}
//       >
//         <p>{task.task_name}</p>
//         <button className="absolute bottom-1 right-1 text-slate-400" onClick={() => handleRemove(task.id)}>
//           Remove
//         </button>
//       </div>
//     );
//   };

//   const filteredTasks = tasks.filter((task) => selectedStatus === 'All' || task.status === selectedStatus);

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="flex h-screen">
//         <div className="flex flex-col flex-grow overflow-y-auto">
//           <div className="p-4">
//             <h1 className="text-3xl font-bold mb-4 mt-4">Task Status</h1>

//             <div className="flex flex-wrap ml-3 justify-start gap-10">
//               {statuses.map((status) => (
//                 <Section key={status} status={status} tasks={tasks} setTasks={setTasks} />
//               ))}
//             </div>

//             <div className="flex flex-col mt-4" draggable>
//               {filteredTasks.map((task) => (
//                 <div
//                   key={task.id}
//                   className="card mb-3 mt-2 task-card relative rounded-[19px] ml-4 pt-1 pb-2 shadow-lg bg-white max-w-[255px]"
//                 >
//                   <h2 className="text-xl font-bold pt-4 pl-2 mb-2">{task.task_name}</h2>
//                   <div className="text-sm text-gray-600 pl-3 mb-2">Deadline: {task.task_deadline}</div>
//                   <p className="text-gray-700 pl-3">{task.task_desc}</p>
//                   <div className="flex justify-between mb-0 mt-1 pl-2 pr-1 relative">
//                     <button className="priority text-[14px] font-serif rounded-full p-0 pl-1 pr-1 mt-3 bg-yellow-300">
//                       {task.task_priority}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default Taskhub;


// import React, { useEffect, useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

// const Taskhub = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState('All');
//   const userId = JSON.parse(localStorage.getItem('user_id')); // Assuming user ID is stored in localStorage


//   // Fetch user projects and tasks when the component mounts
//   useEffect(() => {
//     const fetchUserProjects = async () => {
//       try {
//         const projectResponse = await fetch(`http://127.0.0.1:8000/projects/user-projects/${userId}/`);
//         if (!projectResponse.ok) {
//           throw new Error('Failed to fetch projects');
//         }
//         const projectData = await projectResponse.json();
//         // return projectData;
//         console.log(projectData);
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//         return [];
//       }
//     };

//     const fetchTasksForProject = async (projectId) => {
//       try {
//         const taskResponse = await fetch(`http://127.0.0.1:8000/tasks/projects/user-task-data/${projectId}/${userId}/`);
//         if (!taskResponse.ok) {
//           throw new Error('Failed to fetch tasks for project ' + projectId);
//         }
//         const taskData = await taskResponse.json();
//         console.log(`Fetched Tasks for Project ${projectId}:`, taskData); // Logging fetched tasks
//         return taskData;
//       } catch (error) {
//         console.error('Error fetching tasks for project:', error);
//         return [];
//       }
//     };

//     const fetchTasks = async () => {
//       const projects = await fetchUserProjects();
//       const allTasks = [];

//       if (projects.length === 0) {
//         console.error('No projects found for user:', userId);
//         return;
//       }

//       for (const project of projects) {
//         if (!project.id) {
//           console.error('Project ID is missing for project:', project);
//           continue;
//         }
//         console.log('Fetching tasks for project:', proj_id); // Logging project ID
//         const projectTasks = await fetchTasksForProject(project.id);
//         allTasks.push(...projectTasks);
//       }

//       setTasks(allTasks);
//     };

//     fetchTasks();
//   }, [userId]);

//   useEffect(() => {
//     const savedTasks = localStorage.getItem('tasks');
//     if (savedTasks) {
//       setTasks(JSON.parse(savedTasks));
//     }
//   }, []);

//   const statuses = ['todo', 'inProgress', 'completed'];

//   // Section component to display tasks of a specific status
//   const Section = ({ status, tasks, setTasks }) => {
//     const [{ isOver }, drop] = useDrop({
//       accept: 'task',
//       drop: (item) => addItemToSection(item.id, status),
//       collect: (monitor) => ({
//         isOver: !!monitor.isOver(),
//       }),
//     });

//     const addItemToSection = (id, sectionStatus) => {
//       setTasks((prevTasks) => {
//         const updatedTasks = prevTasks.map((task) =>
//           task.id === id ? { ...task, status: sectionStatus } : task
//         );

//         localStorage.setItem('tasks', JSON.stringify(updatedTasks));

//         return updatedTasks;
//       });
//     };

//     const sectionTasks = tasks.filter((task) => task.status === status);

//     return (
//       <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-200' : ''}`}>
//         <Header text={status} bg="bg-gray-200" count={sectionTasks.length} />
//         {sectionTasks.map((task) => (
//           <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
//         ))}
//       </div>
//     );
//   };

//   // Header component for section title and task count
//   const Header = ({ text, bg, count }) => (
//     <div className={`${bg} flex text-black items-center h-12 pl-4 rounded-md uppercase text-sm`}>
//       {text}
//       <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
//         {count}
//       </div>
//     </div>
//   );

//   // Task component to display individual task details
//   const Task = ({ task, tasks, setTasks }) => {
//     const [{ isDragging }, drag] = useDrag({
//       type: 'task',
//       item: { id: task.id },
//       collect: (monitor) => ({
//         isDragging: !!monitor.isDragging(),
//       }),
//     });

//     const handleRemove = async (id) => {
//       try {
//         await fetch(`http://127.0.0.1:8000/tasks/${id}/`, {
//           method: 'DELETE',
//         });
//         const updatedTasks = tasks.filter((t) => t.id !== id);
//         localStorage.setItem('tasks', JSON.stringify(updatedTasks));
//         setTasks(updatedTasks);
//       } catch (error) {
//         console.error('Error deleting task:', error);
//       }
//     };

//     return (
//       <div
//         ref={drag}
//         className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging ? 'opacity-20' : 'opacity-100'}`}
//       >
//         <p>{task.task_name}</p>
//         <button className="absolute bottom-1 right-1 text-slate-400" onClick={() => handleRemove(task.id)}>
//           Remove
//         </button>
//       </div>
//     );
//   };

//   const filteredTasks = tasks.filter((task) => selectedStatus === 'All' || task.status === selectedStatus);

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="flex h-screen">
//         <div className="flex flex-col flex-grow overflow-y-auto">
//           <div className="p-4">
//             <h1 className="text-3xl font-bold mb-4 mt-4">Task Status</h1>

//             <div className="flex flex-wrap ml-3 justify-start gap-10">
//               {statuses.map((status) => (
//                 <Section key={status} status={status} tasks={tasks} setTasks={setTasks} />
//               ))}
//             </div>

//             <div className="flex flex-col mt-4" draggable>
//               {filteredTasks.map((task) => (
//                 <div
//                   key={task.id}
//                   className="card mb-3 mt-2 task-card relative rounded-[19px] ml-4 pt-1 pb-2 shadow-lg bg-white max-w-[255px]"
//                 >
//                   <h2 className="text-xl font-bold pt-4 pl-2 mb-2">{task.task_name}</h2>
//                   <div className="text-sm text-gray-600 pl-3 mb-2">Deadline: {task.task_deadline}</div>
//                   <p className="text-gray-700 pl-3">{task.task_desc}</p>
//                   <div className="flex justify-between mb-0 mt-1 pl-2 pr-1 relative">
//                     <button className="priority text-[14px] font-serif rounded-full p-0 pl-1 pr-1 mt-3 bg-yellow-300">
//                       {task.task_priority}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default Taskhub;



import React, { useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Taskhub = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const userId = JSON.parse(localStorage.getItem('user_id')); // Assuming user ID is stored in localStorage

  // Fetch user projects and tasks when the component mounts
  useEffect(() => {
    const fetchUserProjects = async () => {
      try {
        const projectResponse = await fetch(`http://127.0.0.1:8000/projects/user-projects/${userId}/`);
        if (!projectResponse.ok) {
          throw new Error('Failed to fetch projects');
        }
        const projectData = await projectResponse.json();
        return projectData;
      } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
      }
    };

    const fetchTasksForProject = async (projectId) => {
      try {
        const taskResponse = await fetch(`http://127.0.0.1:8000/tasks/projects/user-task-data/${projectId}/${userId}/`);
        if (!taskResponse.ok) {
          throw new Error('Failed to fetch tasks for project ' + projectId);
        }
        const taskData = await taskResponse.json();
        console.log(`Fetched Tasks for Project ${projectId}:`, taskData); // Logging fetched tasks
        return taskData;
      } catch (error) {
        console.error('Error fetching tasks for project:', error);
        return [];
      }
    };

    const fetchTasks = async () => {
      const projects = await fetchUserProjects();
      const allTasks = [];

      if (projects.length === 0) {
        console.error('No projects found for user:', userId);
        return;
      }

      for (const project of projects) {
        if (!project.id) {
          console.error('Project ID is missing for project:', project);
          continue;
        }
        console.log('Fetching tasks for project:', project.id); // Corrected logging of project ID
        const projectTasks = await fetchTasksForProject(project.id);
        allTasks.push(...projectTasks);
      }

      setTasks(allTasks);
    };

    fetchTasks();
  }, [userId]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const statuses = ['todo', 'inProgress', 'completed'];

  // Section component to display tasks of a specific status
  const Section = ({ status, tasks, setTasks }) => {
    const [{ isOver }, drop] = useDrop({
      accept: 'task',
      drop: (item) => addItemToSection(item.id, status),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    });

    const addItemToSection = (id, sectionStatus) => {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
          task.id === id ? { ...task, status: sectionStatus } : task
        );

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        return updatedTasks;
      });
    };

    const sectionTasks = tasks.filter((task) => task.status === status);

    return (
      <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-200' : ''}`}>
        <Header text={status} bg="bg-gray-200" count={sectionTasks.length} />
        {sectionTasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
    );
  };

  // Header component for section title and task count
  const Header = ({ text, bg, count }) => (
    <div className={`${bg} flex text-black items-center h-12 pl-4 rounded-md uppercase text-sm`}>
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );

  // Task component to display individual task details
  const Task = ({ task, tasks, setTasks }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'task',
      item: { id: task.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });

    const handleRemove = async (id) => {
      try {
        await fetch(`http://127.0.0.1:8000/tasks/${id}/`, {
          method: 'DELETE',
        });
        const updatedTasks = tasks.filter((t) => t.id !== id);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    };

    return (
      <div
        ref={drag}
        className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging ? 'opacity-20' : 'opacity-100'}`}
      >
        <p>{task.task_name}</p>
        <button className="absolute bottom-1 right-1 text-slate-400" onClick={() => handleRemove(task.id)}>
          Remove
        </button>
      </div>
    );
  };

  const filteredTasks = tasks.filter((task) => selectedStatus === 'All' || task.status === selectedStatus);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen">
        <div className="flex flex-col flex-grow overflow-y-auto">
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4 mt-4">Task Status</h1>

            <div className="flex flex-wrap ml-3 justify-start gap-10">
              {statuses.map((status) => (
                <Section key={status} status={status} tasks={tasks} setTasks={setTasks} />
              ))}
            </div>

            <div className="flex flex-col mt-4" draggable>
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="card mb-3 mt-2 task-card relative rounded-[19px] ml-4 pt-1 pb-2 shadow-lg bg-white max-w-[255px]"
                >
                  <h2 className="text-xl font-bold pt-4 pl-2 mb-2">{task.task_name}</h2>
                  <div className="text-sm text-gray-600 pl-3 mb-2">Deadline: {task.task_deadline}</div>
                  <p className="text-gray-700 pl-3">{task.task_desc}</p>
                  <div className="flex justify-between mb-0 mt-1 pl-2 pr-1 relative">
                    <button className="priority text-[14px] font-serif rounded-full p-0 pl-1 pr-1 mt-3 bg-yellow-300">
                      {task.task_priority}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Taskhub;
