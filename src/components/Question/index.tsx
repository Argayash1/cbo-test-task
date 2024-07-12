import React from 'react'
import styles from './Question.module.scss'

interface IQuestionProps {
	titleText: string
	questionImage: string
}

export const Question = ({ titleText, questionImage }: IQuestionProps) => {
	return (
		<article className={styles.root}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${questionImage})` }}
			></div>
			<h3 className={styles.title}>{titleText}</h3>
		</article>
	)
}
