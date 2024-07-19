import React from 'react'
import styles from './FAQAccordionCard.module.scss'
import clsx from 'clsx'
import useResize from '../../hooks/useResize'

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
	const screenWidth = useResize()

	const answerRef = React.useRef<HTMLParagraphElement>(null)

	const answerOnTablet =
		'Волшебной таблетки, которая точно поможет выжить каждому бизнесу, не будет. Мы разберем множество разных инструментов и изучим, как их применять. Комбинировать и подстраивать эти инструменты под свой бизнес нужно будет самим на практике.'

	return (
		<article className={styles.root}>
			<button
				className={clsx(styles.questionButton, {
					[styles.questionButtonOpenInTablet]: isOpen && screenWidth <= 986,
				})}
				onClick={onClick}
			>
				<span
					className={clsx(styles.question, {
						[styles.questionOpenInTablet]: isOpen && screenWidth <= 986,
					})}
				>
					{question}
				</span>
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
					{screenWidth <= 986 && answer.startsWith('Текущие')
						? answerOnTablet
						: answer}
				</p>
			</div>
		</article>
	)
}
