import React from 'react'
import { CTA } from '../../components'
import styles from './ActivityCard.module.scss'
import { clsx } from 'clsx'

interface ActivityCardProps {
	title: string
	subtitle?: string
	ideasList?: string[]
	addition?: string
	summaryList?: string[]
	icon?: string
}

export const ActivityCard = ({
	title,
	subtitle,
	ideasList,
	addition,
	summaryList,
	icon,
}: ActivityCardProps) => {
	const ideasListItems = ideasList?.map((idea, index) => (
		<li key={index} className={styles.ideasListItem}>
			{idea}
		</li>
	))

	const summaryListItems = summaryList?.map((summary, index) => (
		<li key={index} className={styles.summaryListItem}>
			<span></span>
			{summary}
		</li>
	))

	const additionContent = addition?.split(' ').map((word, index) =>
		word.startsWith('*') ? (
			<span key={index} className={styles.additionSpan}>
				{word.replace('*', '') + ' '}
			</span>
		) : (
			word + ' '
		)
	)

	const isThirdCard = title.startsWith('Брейншторм')
	const isSecondCard = title.startsWith('Что')

	return (
		<article
			className={clsx(styles.root, {
				[styles.rootTypeThird]: isThirdCard,
				[styles.rootTypeFourth]: !subtitle,
				[styles.rootTypeMiddle]: isSecondCard || isThirdCard,
			})}
		>
			<h3
				className={clsx(styles.title, {
					[styles.titleTypeFourth]: !subtitle,
				})}
			>
				{title}
			</h3>
			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
			{ideasList && <ul className={styles.ideasList}>{ideasListItems}</ul>}
			{addition && <p className={styles.addition}>{additionContent}</p>}
			{summaryList && (
				<ul className={styles.summaryList}>{summaryListItems}</ul>
			)}
			{!subtitle && <CTA path='#' linkText='Скачать программу' />}
			{subtitle && (
				<div
					className={clsx(styles.icon, {
						[styles.iconTypeSecond]: isSecondCard,
						[styles.iconTypeThird]: isThirdCard,
					})}
					style={{ backgroundImage: `url(${icon})` }}
				></div>
			)}
		</article>
	)
}
