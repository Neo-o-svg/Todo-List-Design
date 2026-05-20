import { useContext, useEffect } from 'react'
import { TasksContext } from '../../context/TasksContext'

import Wrapper from '../Wrapper/Wrapper'
import Button from '../Button/Button'
import RouterLink from '../RouterLink/RouterLink'
import AddTaskForm from '../AddTaskForm/AddTaskForm'

const CategoryContent = props => {
	const { filteredTasks, categories, setSelectedCategoryId } =
		useContext(TasksContext)

	const { params } = props

	const category_title = params.category.replace(/%20/g, ' ')
	const category_tasks = filteredTasks?.[category_title] || [] // "category_title": [{tasks}]
	const found_category = categories.find(
		item => item.category_title === category_title
	)
	const category_id = found_category ? found_category.id : null

	useEffect(() => {
		setSelectedCategoryId(category_id)
	}, [setSelectedCategoryId, category_id])

	return (
		<div className="category-tasks">
			<div className="container">
				<h1 className="section__title">{category_title}</h1>
				<div className="scroll-container">
					<Wrapper
						category_id={category_id}
						category_name={category_title}
						tasks={category_tasks}
					/>
				</div>
				<AddTaskForm />
				<RouterLink to={'/home'}>
					<Button
						text={' <- Back'}
						isDisables={false}
					/>
				</RouterLink>
			</div>
		</div>
	)
}

export default CategoryContent
