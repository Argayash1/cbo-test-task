import React from 'react'
import styles from './Footer.module.scss'
import { clsx } from 'clsx'
import { cboItems, infoItems, socialItems } from '../../utils/footerItems'
import { Logo } from '../../components'

export const Footer = () => {
	const cboListItems = cboItems.map((item, index) => (
		<li key={index} className={styles.listItem}>
			{item}
		</li>
	))

	const infoListItems = infoItems.map((item, index) => (
		<li key={index} className={clsx(styles.listItem, styles.listItemTypeInfo)}>
			{item}
		</li>
	))

	const socialListItems = socialItems.map((item, index) => (
		<li key={index}>
			<a href={item.link}>
				<div
					className={styles.socialIcon}
					style={{ backgroundImage: `url(${item.icon})` }}
				></div>
			</a>
		</li>
	))

	return (
		<footer className={styles.root}>
			<div className={styles.container}>
				<div className={styles.navContainer}>
					<div className={styles.column}>
						<h3 className={styles.columnHeading}>ЦБО</h3>
						<ul className={styles.cboList}>{cboListItems}</ul>
					</div>
					<div className={clsx(styles.column, styles.columnTypeSecond)}>
						<h3 className={styles.columnHeading}>Информация</h3>
						<ul className={styles.infoList}>{infoListItems}</ul>
					</div>
					<div className={clsx(styles.column, styles.columnTypeThird)}>
						<a href='tel: 8 800 700 1996' className={styles.phone}>
							8 800 700 1996
						</a>
						<p className={styles.callLabel}>Звонок бесплатный</p>
						<ul className={styles.socialList}>{socialListItems}</ul>
						<a href='asas' className={styles.reasonsLink}>
							5 причин подписаться
						</a>
					</div>
				</div>
				<div className={styles.infoContainer}>
					<Logo />
					<p className={styles.copyright}>
						© Группа Компаний «ЦБО» Центр Бизнес-Образования | 1996 — 2022.
						Копирование любых материалов с сайта запрещено.
					</p>
				</div>
			</div>
		</footer>
	)
}
