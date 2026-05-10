import { createContext } from 'react'
import useTasks from '../hooks/useTasks'

export const TasksContext = createContext({})

export const TasksProvider = props => {
	const { children } = props

	const {
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
	} = useTasks()

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
