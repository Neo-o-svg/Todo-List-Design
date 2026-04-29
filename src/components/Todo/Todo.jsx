import { useCallback, useEffect, useMemo, useState } from 'react'

import Wrapper from '../Wrapper/Wrapper'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import SearchTaskForm from '../SearchTaskForm/SearchTaskForm'
import TodoList from '../TodoList/TodoList'

import styles from '../Wrapper/Wrapper.module.scss'

const Todo = props => {
	const { categories, selectedCategoryId } = props

	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem('tasks')

		if (savedTasks) {
			return JSON.parse(savedTasks)
		}

		return [
			{
				id: 'c9bf',
				title: 'Create icons for a dashboard',
				isDone: false,
				category: 'Art'
			},
			{
				id: '37ec',
				title: 'Prepare a design presentation',
				isDone: false,
				category: 'Art'
			},
			{
				id: '44a8',
				title: 'Stretch for 15 minutes',
				isDone: false,
				category: 'Sport'
			},
			{ id: 'a0bd', title: 'Plan your meal', isDone: false, category: 'Home' },
			{
				id: '79a7',
				title:
					'Review daily goals before sleeping. Add some new if time permits',
				isDone: false,
				category: 'Dist'
			},
			{
				id: '3601',
				title: 'Water indoor plants',
				isDone: false,
				category: 'Garden'
			}
		]
	})

	const filteredTasks = useMemo(() => {
		if (!categories || !tasks) return {}

		return tasks.reduce((acc, task) => {
			const ctg = task.category
			if (!acc[ctg]) acc[ctg] = []
			acc[ctg].push(task)
			return acc
		}, {})
	}, [tasks, categories])

	const [newTaskTitle, setNewTaskTitle] = useState('')
	const [ctgError, setCtgError] = useState(false)

	const [searchQuery, setSearchQuery] = useState('')

	const addTask = useCallback(() => {
		if (newTaskTitle.trim().length > 0) {
			const task_category = categories.find(c => c.id == selectedCategoryId)
			if (!task_category) {
				setCtgError(true)
				return
			}
			const newTask = {
				id: crypto?.randomUUID() ?? Date.now().toString(),
				title: newTaskTitle,
				isDone: false,
				category: task_category.category_title
			}

			setTasks(prev => [...prev, newTask])
			setNewTaskTitle('')
			setSearchQuery('')
			setCtgError(false)
		}
	}, [newTaskTitle, selectedCategoryId, categories])

	const deleteTask = useCallback(taskId => {
		setTasks(prev => prev.filter(task => task.id !== taskId))
	}, [])

	const toggleTaskComplete = useCallback((taskId, isDone) => {
		setTasks(prev =>
			prev.map(task => {
				if (task.id === taskId) {
					return { ...task, isDone }
				}
				return task
			})
		)
	}, [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const clearSearchQuery = searchQuery.trim().toLowerCase()
	const filteredSearchTasks =
		clearSearchQuery.length > 0
			? tasks.filter(({ title }) =>
					title.toLowerCase().includes(clearSearchQuery)
				)
			: null

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
