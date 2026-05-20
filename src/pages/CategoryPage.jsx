import React from 'react'

import { TasksContext, TasksProvider } from '../context/TasksContext'

import CategoryContent from '../components/CategoryContent/CategoryContent'

const CategoryPage = props => (
	<TasksProvider>
		<CategoryContent {...props} />
	</TasksProvider>
)

export default CategoryPage
