import Todo from "./Todo";
import "../index.css";

const PendingTodo = ({ ...props }) => {
	// fetching the pending tasks from the props
	let { pendingTodo } = props;

	return (
		// rendering the pending tasks
		<div className="todo-container">
			<div className="header">Pending Todo</div>
			<div className="tasks">
				{/* mapping the pending todos with the component */}
				{pendingTodo?.map((task, index) => (
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

export default PendingTodo;
