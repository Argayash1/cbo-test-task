import React from 'react'
import styles from './SliderButton.module.scss'
import clsx from 'clsx'

type SliderNextButtonProps = {
	switchCount: number
	onClick: () => void
	type?: string
	nextButtonDisabled?: boolean
}

export const SliderButton = ({
	type,
	onClick,
	switchCount,
	nextButtonDisabled,
}: SliderNextButtonProps) => {
	return (
		<button
			className={clsx(styles.root, {
				[styles.rootTypeLeft]: nextButtonDisabled === undefined,
				[styles.rootTypeAboutPracticum]: type === 'about-practicum',
			})}
			onClick={onClick}
			disabled={
				nextButtonDisabled === undefined
					? switchCount === 0
					: nextButtonDisabled
			}
		></button>
	)
}
