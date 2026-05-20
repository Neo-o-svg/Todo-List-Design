import { memo } from 'react'

import TodoItem from '../TodoItem/TodoItem'

const TodoList = props => {
	const { styles, tasks } = props

	const hasTasks = tasks.length > 0

	if (!hasTasks) {
		return <div className={styles.emptyMessage}>There are no tasks yet</div>
	}

	return (
		<ul
			id="tasks"
			className={styles.list}
		>
			{tasks.map(task => (
				<TodoItem
					className={styles.item}
					key={task.id}
					{...task}
				/>
			))}
		</ul>
	)
}

export default memo(TodoList)
