import React from 'react'
import styles from './SectionSubtitle.module.scss'
import { clsx } from 'clsx'

interface ISectionSubtitle {
	text: string
	place?: string
}

export const SectionSubtitle = ({ text, place }: ISectionSubtitle) => {
	return (
		<p
			className={clsx(styles.root, {
				[styles.rootPlaceQuestions]: place === 'questions',
				[styles.rootPlacePracticeActivity]: place === 'practice-activity',
				[styles.rootPlaceAboutAuthor]: place === 'about-author',
			})}
		>
			{text}
		</p>
	)
}
