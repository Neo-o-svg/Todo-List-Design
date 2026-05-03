import { useContext } from 'react'
import styles from './Field.module.scss'
import { TasksContext } from '../../context/TasksContext'

const Field = props => {
	const { className = '', id, label, type = 'text', value, onInput } = props

	const { ctgError } = useContext(TasksContext)

	return (
		<div className={`${styles.field} ${className}`}>
			<label
				className={styles.label}
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className={`${styles.input} ${ctgError ? styles.inputError : ''}`}
				id={id}
				placeholder=" "
				autoComplete="off"
				type={type}
				value={value}
				onInput={onInput}
			/>
		</div>
	)
}

export default Field
