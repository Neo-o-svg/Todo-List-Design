import { memo } from 'react'
import TodoList from '../TodoList/TodoList'
import styles from './Wrapper.module.scss'

const Wrapper = ({
	category_name,
	withMargin = false,
	tasks,
	deleteTask,
	toggleTaskComplete
}) => {
	return (
		<div className={`${styles.wrapper} ${withMargin ? styles['ml-30'] : ''}`}>
			<p
				className={`${styles.wrapper__text} ${withMargin ? styles['ml-10'] : ''}`}
			>
				{category_name}
			</p>
			<div className={`${styles.wrapper__content}`}>
				<TodoList
					styles={styles}
					tasks={tasks}
					deleteTask={deleteTask}
					toggleTaskComplete={toggleTaskComplete}
				/>
			</div>
		</div>
	)
}

export default memo(Wrapper)
