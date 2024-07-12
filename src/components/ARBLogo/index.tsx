import React from 'react'
import logo from '../../assets/images/lead-arblogo.png'
import styles from './ARBLogo.module.scss'

export const ARBLogo = () => {
	return (
		<img
			src={logo}
			alt='Логотип Центра бизнес-образования'
			className={styles.root}
		/>
	)
}
