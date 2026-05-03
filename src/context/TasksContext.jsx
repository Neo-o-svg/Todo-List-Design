import { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export const TasksContext = createContext({})

export const TasksProvider = props => {
	const { children } = props

	// Category
	const [categories, setCategories] = useState(() => {
		const savedCategories = localStorage.getItem('categories')

		if (savedCategories) {
			return JSON.parse(savedCategories)
		}

		return [
			{ id: 1, category_title: 'Exercise' },
			{ id: 2, category_title: 'Read books' },
			{ id: 3, category_title: 'Meditate' },
			{ id: 4, category_title: 'Plan meals' },
			{ id: 5, category_title: 'Water plants' },
			{ id: 6, category_title: 'Journal' },
			{ id: 7, category_title: 'Stretch for 15 mins' },
			{ id: 8, category_title: 'Review goals before' },
			{ id: 9, category_title: 'Art' },
			{ id: 10, category_title: 'Sport' },
			{ id: 11, category_title: 'Dist' },
			{ id: 12, category_title: 'Garden' }
		]
	})

	const [selectedCategoryId, setSelectedCategoryId] = useState('')

	const [newCategoryTitle, setNewCategoryTitle] = useState('')

	const deleteCategory = categoryId => {
		setCategories(
			categories.filter(category => {
				return category.id != categoryId
			})
		)
		setSelectedCategoryId('')
	}

	const addCategory = () => {
		if (newCategoryTitle.trim().length > 0) {
			const newCategory = {
				id: crypto?.randomUUID() ?? Date.now().toString(),
				category_title: newCategoryTitle
			}
			setCategories([...categories, newCategory])
			setNewCategoryTitle('')
		}
	}

	useEffect(() => {
		localStorage.setItem('categories', JSON.stringify(categories))
	}, [categories])

	// Tasks
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
	const filteredSearchTasks = useMemo(() => {
		const query = searchQuery.trim().toLowerCase()
		if (query.length === 0) return null
		return tasks.filter(({ title }) => title.toLowerCase().includes(query))
	}, [tasks, searchQuery])

	return (
		<TasksContext.Provider
			value={{
				categories,
				setCategories,
				selectedCategoryId,
				setSelectedCategoryId,
				deleteCategory,
				newCategoryTitle,
				setNewCategoryTitle,
				addCategory,
				tasks,
				setTasks,
				filteredTasks,
				newTaskTitle,
				setNewTaskTitle,
				ctgError,
				searchQuery,
				setSearchQuery,
				addTask,
				deleteTask,
				toggleTaskComplete,
				clearSearchQuery,
				filteredSearchTasks
			}}
		>
			{children}
		</TasksContext.Provider>
	)
}
