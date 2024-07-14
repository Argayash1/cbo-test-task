import React from 'react'
import styles from './AboutPractiсum.module.scss'
import { SectionTitle, CardSlider, AboutPracticumCard } from '../../components'
import { aboutPracticumCards } from '../../utils/aboutPracticumCards'

export const AboutPractiсum = () => {
	const [switchCount, setSwitchCount] = React.useState<number>(0)

	const nextButtonDisabled = switchCount >= 2

	const cardListItems = aboutPracticumCards.map((card, index) => (
		<li key={index}>
			<AboutPracticumCard {...card} />
		</li>
	))

	return (
		<section>
			<div className={styles.container}>
				<SectionTitle titleText='Что говорят о практикуме?' />
				<CardSlider
					switchCount={switchCount}
					onSwitchToPrevSlides={() => setSwitchCount((prev) => prev - 1)}
					onSwitchToNextSlides={() => setSwitchCount((prev) => prev + 1)}
					nextButtonDisabled={nextButtonDisabled}
					type='about-practicum'
				>
					{<ul className={styles.cardList}>{cardListItems}</ul>}
				</CardSlider>
			</div>
		</section>
	)
}
