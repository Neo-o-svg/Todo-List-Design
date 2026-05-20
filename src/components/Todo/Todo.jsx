import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'

import Wrapper from '../Wrapper/Wrapper'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import SearchTaskForm from '../SearchTaskForm/SearchTaskForm'
import TodoList from '../TodoList/TodoList'

import styles from '../Wrapper/Wrapper.module.scss'

const Todo = () => {
	const { filteredSearchTasks, filteredTasks } = useContext(TasksContext)

	return (
		<div className="todo">
			<div className="container">
				<h1 className="section__title">Today</h1>
				<SearchTaskForm />
				<div className="scroll-container">
					{filteredSearchTasks ? (
						<TodoList
							styles={styles}
							tasks={filteredSearchTasks}
						/>
					) : (
						Object.entries(filteredTasks).map(([ctg, tasks]) => (
							<Wrapper
								key={ctg}
								category_name={ctg}
								tasks={tasks}
							/>
						))
					)}
				</div>
				<AddTaskForm />
			</div>
		</div>
	)
}

export default Todo
