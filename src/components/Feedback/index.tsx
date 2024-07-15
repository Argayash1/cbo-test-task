import React from 'react'
import styles from './Feedback.module.scss'
import {
	SectionTitle,
	SectionSubtitle,
	CTA,
	FeedbackForm,
	SpecialistCard,
} from '../../components'

export const Feedback = () => {
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<SectionTitle
					titleText='Хотите уточнить условия участия?'
					place='feedback'
				/>
				<SectionSubtitle
					text='Пишите нам, мы проконсультируем по всем вопросам.'
					place='feedback'
				/>
				<FeedbackForm />
				<CTA path='#' />
				<SpecialistCard />
			</div>
		</section>
	)
}
