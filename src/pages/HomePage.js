import { useEffect, useState } from "react";
import AddTask from "../components/AddTask";
import CompletedTodo from "../components/CompletedTodo";
import PendingTodo from "../components/PendingTodo";

const HomePage = () => {
	// setting the state for the todo list
	const [tasks, setTasks] = useState([]);
	const [index, setIndex] = useState(0);

	// fetching the data from the local storage
	useEffect(() => {
		const tasks = JSON.parse(localStorage.getItem("tasks"));
		if (tasks) {
			setTasks(tasks);
		}
	}, [localStorage.getItem("tasks")]);

	// adding the task to the local storage whenever status changes
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
		setIndex(0);
	}, [!index, tasks]);

	// changing the status of the task by index
	const handleClick = (index) => {
		if (index) {
			setIndex(index);
			tasks.find((task) => {
				if (task.id === index) {
					task.completed = !task.completed;
				}
			});
			setTasks([...tasks]);
		}
	};

	// filtering the tasks based on the status
	let completedTodo = tasks.filter((task) => task.completed);
	let pendingTodo = tasks.filter((task) => !task.completed);

	return (
		<div>
			<AddTask setTasks={setTasks} tasks={tasks} />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<CompletedTodo
					completedTodo={completedTodo}
					handleClick={handleClick}
				/>
				<PendingTodo pendingTodo={pendingTodo} handleClick={handleClick} />
			</div>
		</div>
	);
};

export default HomePage;
