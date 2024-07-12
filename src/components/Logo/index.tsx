import React from 'react'
import logo from '../../assets/images/logo.png'
import styles from './Logo.module.scss'
import { clsx } from 'clsx'

interface ILogoProps {
	place?: string
}

export const Logo = ({ place }: ILogoProps) => {
	return (
		<img
			src={logo}
			alt='Логотип Центра бизнес-образования'
			className={clsx(styles.root, {
				[styles.rootTypeSpeakerCard]: place === 'speakercard',
			})}
		/>
	)
}
