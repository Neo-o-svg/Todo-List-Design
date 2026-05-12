import { TasksContext } from '../../context/TasksContext'

import styles from './Field.module.scss'

const Field = props => {
	const {
		className = '',
		id,
		label,
		type = 'text',
		value,
		error,
		onInput
	} = props

	return (
		<div className={`${styles.field} ${className}`}>
			<label
				className={styles.label}
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className={`${styles.input} ${error ? styles.inputError : ''}`}
				id={id}
				placeholder=" "
				autoComplete="off"
				type={type}
				value={value}
				onInput={onInput}
			/>
			{error && <p className="ctgError">Cannot be empty</p>}
		</div>
	)
}

export default Field
