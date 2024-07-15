import React from 'react'
import styles from './SectionTitle.module.scss'
import { clsx } from 'clsx'

interface ISectionTitle {
	titleText: string
	place?: string
}

export const SectionTitle = ({ titleText, place }: ISectionTitle) => {
	return (
		<h2
			className={clsx(styles.root, {
				[styles.rootPlaceQuestions]: place === 'questions',
				[styles.rootPlaceTargetAudience]: place === 'target-audience',
				[styles.rootTypeTextAlignLeft]:
					place === 'about-author' || place === 'feedback',
				[styles.rootPlaceAboutAuthor]: place === 'about-author',
			})}
		>
			{titleText}
		</h2>
	)
}
