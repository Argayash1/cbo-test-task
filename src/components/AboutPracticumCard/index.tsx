import React from 'react'
import styles from './AboutPracticumCard.module.scss'

interface IAboutPracticumCardProps {
	name: string
	title: string
	about: string
	image: string
}

export const AboutPracticumCard = ({
	name,
	title,
	about,
	image,
}: IAboutPracticumCardProps) => {
	return (
		<article className={styles.root}>
			<img src={image} alt={name + title} className={styles.photo} />
			<h3 className={styles.name}>{name}</h3>
			<p className={styles.title}>{title}</p>
			<p className={styles.about}>{about}</p>
		</article>
	)
}
