import { useContext } from 'react'

import Wrapper from '../Wrapper/Wrapper'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import SearchTaskForm from '../SearchTaskForm/SearchTaskForm'
import TodoList from '../TodoList/TodoList'

import { TasksContext } from '../../context/TasksContext'

import styles from '../Wrapper/Wrapper.module.scss'

const Todo = () => {
	const {
		searchQuery,
		setSearchQuery,
		filteredSearchTasks,
		deleteTask,
		toggleTaskComplete,
		filteredTasks,
		addTask,
		newTaskTitle,
		setNewTaskTitle,
		ctgError
	} = useContext(TasksContext)

	return (
		<div className="todo">
			<div className="container">
				<h1 className="section__title">Today</h1>
				<SearchTaskForm
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
				<div className="scroll-container">
					{filteredSearchTasks ? (
						<TodoList
							styles={styles}
							tasks={filteredSearchTasks}
							deleteTask={deleteTask}
							toggleTaskComplete={toggleTaskComplete}
						/>
					) : (
						Object.entries(filteredTasks).map(([ctg, tasks]) => (
							<Wrapper
								key={ctg}
								category_name={ctg}
								tasks={tasks}
								deleteTask={deleteTask}
								toggleTaskComplete={toggleTaskComplete}
							/>
						))
					)}
				</div>
				<AddTaskForm
					addTask={addTask}
					newTaskTitle={newTaskTitle}
					setNewTaskTitle={setNewTaskTitle}
					ctgError={ctgError}
				/>
			</div>
		</div>
	)
}

export default Todo
