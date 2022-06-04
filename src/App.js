import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

const App = () => {
	const [tasks] = useState([
		{
			id: 1,
			title: "Complete assignments",
			completed: true,
		},
		{
			id: 2,
			title: "Learn NodeJS",
			completed: true,
		},
		{
			id: 3,
			title: "Hangout with friends",
			completed: false,
		},
		{
			id: 4,
			title: "Go to the gym",
			completed: false,
		},
	]);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	return (
		<div className="App">
			<div className="header">Todo List</div>
			<HomePage />
		</div>
	);
};

export default App;
