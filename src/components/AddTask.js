import { useState } from "react";

const AddTask = ({ ...props }) => {
	// setting the state for the new todo
	const [value, setValue] = useState("");

	// setting the value of the new todo
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	// adding the new todo to the list
	const handleSubmit = (event) => {
		event.preventDefault();
		if (value !== "") {
			let newTask = {
				id: props?.tasks.length + 1,
				title: value,
				completed: false,
			};
			props?.setTasks([...props?.tasks, newTask]);
			setValue("");
		}
	};

	return (
		<div
			className="add-task-container"
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly",
				alignItems: "center",
				textAlign: "center",
			}}
		>
			<div className="header">Add New Task</div>
			<form>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					<input
						className="input"
						type="text"
						value={value}
						onChange={handleChange}
						placeholder="Add new task"
					/>
					<button className="submit" onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddTask;
