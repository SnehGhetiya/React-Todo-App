import Todo from "./Todo";

const CompletedTodo = ({ ...props }) => {
	// taking the completed tasks from the props
	let { completedTodo } = props;

	return (
		// rendering the completed tasks
		<div className="todo-container">
			<div className="header">Completed Todo</div>
			<div className="tasks">
				{/* mapping the pending todos with the component */}
				{completedTodo?.map((task, index) => (
					<Todo
						task={task}
						index={index}
						key={index}
						handleClick={props.handleClick}
					/>
				))}
			</div>
		</div>
	);
};

export default CompletedTodo;
