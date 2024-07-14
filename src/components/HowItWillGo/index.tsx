import React from 'react'
import {
	CardSlider,
	CTA,
	SectionSubtitle,
	SectionTitle,
} from '../../components'
import photo1 from '../../assets/images/hoitwilgo-photo1.jpg'
import photo2 from '../../assets/images/hoitwilgo-photo2.jpg'
import photo3 from '../../assets/images/hoitwilgo-photo3.jpg'
import styles from './HowItWillGo.module.scss'

const photos = [
	{ image: photo1, altText: 'Фото 1' },
	{ image: photo2, altText: 'Фото 2' },
	{ image: photo3, altText: 'Фото 3' },
]

export const HowItWillGo = () => {
	const [switchCount, setSwitchCount] = React.useState<number>(0)

	const photoListItems = photos.map((photo, index) => (
		<li key={index}>
			<img src={photo.image} alt={photo.altText} className={styles.photo} />
		</li>
	))

	const nextButtonDisabled = switchCount >= 2

	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<SectionTitle titleText='Как все будет проходить?' />
				<SectionSubtitle text='Предметный разговор без купюр:' />
				<CardSlider
					switchCount={switchCount}
					onSwitchToPrevSlides={() => setSwitchCount((prev) => prev - 1)}
					onSwitchToNextSlides={() => setSwitchCount((prev) => prev + 1)}
					nextButtonDisabled={nextButtonDisabled}
				>
					<ul className={styles.photoList}>{photoListItems}</ul>
				</CardSlider>
				<CTA path='#' type='how-it-will-go' />
			</div>
		</section>
	)
}
