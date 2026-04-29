import styles from './Field.module.scss'

const Field = props => {
	const {
		className = '',
		id,
		label,
		type = 'text',
		value,
		onInput,
		ctgError
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
