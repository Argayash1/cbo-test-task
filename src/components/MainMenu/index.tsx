import React from 'react'
import styles from './MainMenu.module.scss'
import { mainMenuItems } from '../../utils/mainMenuItems'
import clsx from 'clsx'

export const MainMenu = () => {
	const mainMenuListItems = mainMenuItems.map((item, index) => (
		<li
			key={index}
			className={clsx(styles.menuItem, {
				[styles.menuItemTypeFirst]: index === 0,
			})}
		>
			{item}
			{index === 0 && <span className={styles.arrowIcon}></span>}
		</li>
	))
	return (
		<nav className={styles.root}>
			<ul className={styles.list}>{mainMenuListItems}</ul>
		</nav>
	)
}
