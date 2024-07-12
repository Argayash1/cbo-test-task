import React from 'react'
import styles from './TargetAudienceCard.module.scss'

interface ITargetAudienceCardProps {
	cardNumber: string
	cardTitle: string
	cardText: string
}

export const TargetAudienceCard = ({
	cardNumber,
	cardTitle,
	cardText,
}: ITargetAudienceCardProps) => {
	return (
		<article className={styles.root}>
			<span className={styles.number}>{cardNumber}</span>
			<h3 className={styles.title}>{cardTitle}</h3>
			<p className={styles.description}>{cardText}</p>
		</article>
	)
}
