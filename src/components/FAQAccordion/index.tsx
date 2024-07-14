import React from 'react'
import styles from './FAQAccordion.module.scss'
import { FAQitems } from '../../utils/FAQitems'
import { clsx } from 'clsx'

export const FAQAccordion = () => {
	const [openItemIndex, setOpenItemIndex] = React.useState<number | null>(null)
	const answerRef = React.useRef<HTMLParagraphElement>(null)

	const faqAccordionListItems = FAQitems.map((item, index) => (
		<li key={index} className={styles.accordionItem}>
			<button
				className={styles.questionButton}
				onClick={() => setOpenItemIndex(openItemIndex === index ? null : index)}
			>
				{item.question}
				<span
					className={clsx(styles.buttonIcon, {
						[styles.buttonIconRotated]: openItemIndex === index,
					})}
				></span>
			</button>
			<p
				className={styles.answer}
				ref={answerRef}
				style={{
					height:
						openItemIndex === index
							? `${answerRef.current?.scrollHeight && answerRef.current.scrollHeight + 25}px`
							: '0',
				}}
			>
				{item.answer}
			</p>
		</li>
	))

	return <ul className={styles.root}>{faqAccordionListItems}</ul>
}
