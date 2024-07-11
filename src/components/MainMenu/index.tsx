import React from 'react'
import styles from './MainMenu.module.scss'
import { mainMenuItems } from '../../utils/mainMenuItems'

export const MainMenu = () => {
	const mainMenuListItems = mainMenuItems.map((item, index) => (
		<li key={index}>{item}</li>
	))
	return (
		<nav className={styles.root}>
			<ul className={styles.list}>{mainMenuListItems}</ul>
		</nav>
	)
}
