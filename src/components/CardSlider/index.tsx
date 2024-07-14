import React from 'react'
import styles from './CardSlider.module.scss'
import clsx from 'clsx'
import { SliderButton } from '../../components'

type CardSliderProps = {
	onSwitchToNextSlides: () => void
	onSwitchToPrevSlides: () => void
	children: React.ReactNode
	switchCount: number
	nextButtonDisabled: boolean
	type?: string
	screenWidth?: number
}

export const CardSlider = ({
	children,
	onSwitchToPrevSlides,
	onSwitchToNextSlides,
	switchCount,
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
			{!type && (
				<SliderButton
					onClick={onSwitchToNextSlides}
					switchCount={switchCount}
					nextButtonDisabled={nextButtonDisabled}
					type={type}
				/>
			)}
			<div className={styles.buttonList}>
				<SliderButton
					onClick={onSwitchToPrevSlides}
					switchCount={switchCount}
					type={type}
				/>
				<span className={styles.slideNumber}>1</span>/
				<span className={styles.slideCount}>5</span>
				<SliderButton
					onClick={onSwitchToNextSlides}
					switchCount={switchCount}
					nextButtonDisabled={nextButtonDisabled}
					type={type}
				/>
			</div>
		</div>
	)
}
