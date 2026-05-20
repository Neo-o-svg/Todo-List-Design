import { memo } from 'react'

import TodoList from '../TodoList/TodoList'
import RouterLink from '../RouterLink/RouterLink'

import styles from './Wrapper.module.scss'

const Wrapper = ({ category_name, withMargin = false, tasks }) => {
	return (
		<div className={`${styles.wrapper} ${withMargin ? styles['ml-30'] : ''}`}>
			<p
				className={`${styles.wrapper__text} ${withMargin ? styles['ml-10'] : ''}`}
			>
				<RouterLink
					to={`/tasks/${category_name}`}
					aria-label="Category detail page"
				>
					{category_name}
				</RouterLink>
			</p>
			<div className={`${styles.wrapper__content}`}>
				<TodoList
					styles={styles}
					tasks={tasks}
				/>
			</div>
		</div>
	)
}

export default memo(Wrapper)
