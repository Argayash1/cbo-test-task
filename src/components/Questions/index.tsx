import React from 'react'
import styles from './Questions.module.scss'
import { SectionTitle, SectionSubtitle, Question } from '../../components'
import { questionsItems } from '../../utils/questionsItems'
import questionImage1 from '../../assets/images/questions-image-1.svg'
import questionImage2 from '../../assets/images/questions-image-2.svg'
import questionImage3 from '../../assets/images/questions-image-3.svg'

const questionImages = [questionImage1, questionImage2, questionImage3]

export const Questions = () => {
	const questionsListItems = questionsItems.map((question, index) => (
		<li key={index}>
			<Question titleText={question} questionImage={questionImages[index]} />
		</li>
	))

	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<SectionTitle
					titleText='2022 - рекордный по количеству форс-мажоров '
					place='questions'
				/>
				<SectionSubtitle text='В этих условиях бизнесу важно отвечать на вопросы:' />
				<ul className={styles.list}>{questionsListItems}</ul>
			</div>
		</section>
	)
}
