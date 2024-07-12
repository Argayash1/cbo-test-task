import React from 'react'
import styles from './BreadCrumbs.module.scss'

interface IBreadCrumbsProps {
	pathNames: (string | number)[]
}

export const BreadCrumbs = ({ pathNames }: IBreadCrumbsProps) => {
	const pathNamesListItems = pathNames.map((pathName, index) =>
		index === pathNames.length - 1 ? (
			<li key={index} className={styles.crumb}>
				{pathName}
			</li>
		) : (
			<li key={index}>
				{pathName}
				<span className={styles.crumbSpan}>/</span>
			</li>
		)
	)

	return (
		<nav className={styles.root}>
			<ul className={styles.list}>{pathNamesListItems}</ul>
		</nav>
	)
}
