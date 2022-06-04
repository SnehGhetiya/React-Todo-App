const Todo = ({ task, handleClick }) => {
	return (
		// renders the task
		<div
			className="task"
			key={task.id}
			style={{ textDecoration: task.completed ? "line-through" : "" }}
			onClick={() => handleClick(task.id)}
		>
			{task.title}
		</div>
	);
};

export default Todo;
