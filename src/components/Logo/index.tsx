import React from 'react'
import logo from '../../assets/images/logo.png'
import styles from './Logo.module.scss'

export const Logo = () => {
	return (
		<img
			src={logo}
			alt='Логотип Центра бизнес-образования'
			className={styles.root}
		/>
	)
}
