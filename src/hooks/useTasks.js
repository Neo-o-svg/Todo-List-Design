import { useCallback, useEffect, useMemo, useState } from 'react'

import tasksAPI from '../api/tasksAPI'
import categoriesAPI from '../api/categoryAPI'

const useTasks = () => {
	// Category
	const [categories, setCategories] = useState([])

	const [selectedCategoryId, setSelectedCategoryId] = useState('')

	const [newCategoryTitle, setNewCategoryTitle] = useState('')

	const addCategory = useCallback(
		clearNewCategoryTitle => {
			const isNewCategoryTitleEmpty = clearNewCategoryTitle.length === 0
			if (!isNewCategoryTitleEmpty) {
				const newCategory = {
					category_title: clearNewCategoryTitle
				}

				categoriesAPI.add(newCategory).then(addedCategory => {
					setCategories([...categories, addedCategory])
					setNewCategoryTitle('')
				})
			}
		},
		[categories]
	)

	const deleteCategory = useCallback(
		categoryId => {
			categoriesAPI.delete(categoryId).then(() => {
				setCategories(
					categories.filter(category => {
						return category.id != categoryId
					})
				)
				setSelectedCategoryId('')
			})
		},
		[categories]
	)

	// Tasks
	const [tasks, setTasks] = useState([])

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

	const addTask = useCallback(
		clearNewTaskTitle => {
			const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0
			if (!isNewTaskTitleEmpty) {
				const task_category = categories.find(c => c.id == selectedCategoryId)
				if (!task_category) {
					setCtgError(true)
					return
				}
				const newTask = {
					title: clearNewTaskTitle,
					isDone: false,
					category: task_category.category_title
				}

				tasksAPI.add(newTask).then(addedTask => {
					setTasks(prev => [...prev, addedTask])
					setNewTaskTitle('')
					setSearchQuery('')
					setCtgError(false)
				})
			}
		},
		[selectedCategoryId, categories]
	)

	const deleteTask = useCallback(taskId => {
		tasksAPI.delete(taskId).then(() => {
			setTasks(prev => prev.filter(task => task.id !== taskId)) //why prev and not (task) => task.id !== taskId
		})
	}, [])

	const toggleTaskComplete = useCallback((taskId, isDone) => {
		// what is headers
		tasksAPI.toggleComplete(taskId, isDone).then(() => {
			setTasks(prev =>
				prev.map(task => {
					if (task.id === taskId) {
						return { ...task, isDone }
					}
					return task
				})
			)
		})
	}, [])

	useEffect(() => {
		fetch('http://localhost:3001/tasks')
			.then(response => response.json())
			.then(setTasks)
		fetch('http://localhost:3001/categories')
			.then(response => response.json())
			.then(setCategories)
	}, [])

	const clearSearchQuery = searchQuery.trim().toLowerCase()
	const filteredSearchTasks = useMemo(() => {
		const query = searchQuery.trim().toLowerCase()
		if (query.length === 0) return null
		return tasks.filter(({ title }) => title.toLowerCase().includes(query))
	}, [tasks, searchQuery])

	return {
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
		setCtgError,
		searchQuery,
		setSearchQuery,
		addTask,
		deleteTask,
		toggleTaskComplete,
		clearSearchQuery,
		filteredSearchTasks
	}
}

export default useTasks
