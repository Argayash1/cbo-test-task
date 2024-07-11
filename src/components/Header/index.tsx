import React from 'react'
import styles from './Header.module.scss'
import { CTA, Logo, MainMenu, TopMenu } from '../../components'

export const Header = () => {
	return (
		<header className={styles.root}>
			<div className={styles.container}>
				<Logo />
				<TopMenu />
				<a href='tel:8 800 700 1996' className={styles.phone}>
					8 800 700 1996
				</a>
			</div>
			<div className={styles.mainMenuContainer}>
				<div className={styles.container}>
					<MainMenu />
					<CTA path='#' linkText='Календарь программ' type='header' />
				</div>
			</div>
		</header>
	)
}
