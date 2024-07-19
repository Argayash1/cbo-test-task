import React from 'react'
import styles from './FAQAccordionCard.module.scss'
import clsx from 'clsx'

interface FAQAccordionCardProps {
	question: string
	answer: string
	onClick: () => void
	isOpen: boolean
}

export const FAQAccordionCard = ({
	question,
	answer,
	onClick,
	isOpen,
}: FAQAccordionCardProps) => {
	const answerRef = React.useRef<HTMLParagraphElement>(null)

	return (
		<article className={styles.root}>
			<button className={styles.questionButton} onClick={onClick}>
				{question}
				<span
					className={clsx(styles.buttonIcon, {
						[styles.buttonIconRotated]: isOpen,
					})}
				></span>
			</button>
			<div
				className={clsx(styles.accordionCollapse)}
				style={{
					height: isOpen
						? `${answerRef.current?.scrollHeight && answerRef.current.scrollHeight}px`
						: '0',
				}}
			>
				<p className={styles.answer} ref={answerRef}>
					{answer}
				</p>
			</div>
		</article>
	)
}
