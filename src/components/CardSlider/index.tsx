import React from 'react'
import styles from './CardSlider.module.scss'
import clsx from 'clsx'
import { SliderButton } from '../../components'

type CardSliderProps = {
	onSwitchToNextSlides: () => void
	onSwitchToPrevSlides: () => void
	children: React.ReactNode
	switchCount: number
	sliderCount?: number
	nextButtonDisabled: boolean
	type?: string
	screenWidth?: number
}

export const CardSlider = ({
	children,
	onSwitchToPrevSlides,
	onSwitchToNextSlides,
	switchCount,
	sliderCount,
	nextButtonDisabled,
	type,
}: CardSliderProps) => {
	return (
		<div className={clsx(styles.root)}>
			{!type && (
				<SliderButton
					onClick={onSwitchToPrevSlides}
					switchCount={switchCount}
					type={type}
				/>
			)}
			<div className={clsx(styles.wrapper)}>{children}</div>
			{type !== 'about-practicum' && (
				<SliderButton
					onClick={onSwitchToNextSlides}
					switchCount={switchCount}
					nextButtonDisabled={nextButtonDisabled}
					type={type}
				/>
			)}
			{type === 'about-practicum' && (
				<div className={styles.buttonList}>
					<SliderButton
						onClick={onSwitchToPrevSlides}
						switchCount={switchCount}
						type={type}
					/>
					<span className={styles.slideNumber}>{switchCount + 1}</span>/
					<span className={styles.slideCount}>{sliderCount}</span>
					<SliderButton
						onClick={onSwitchToNextSlides}
						switchCount={switchCount}
						nextButtonDisabled={nextButtonDisabled}
						type={type}
					/>
				</div>
			)}
		</div>
	)
}
