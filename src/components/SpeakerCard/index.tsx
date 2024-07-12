import React from 'react'
import styles from './SpeakerCard.module.scss'
import { ARBLogo, Logo } from '../../components'

export const SpeakerCard = () => {
	return (
		<article className={styles.root}>
			<h3 className={styles.speakerName}>Демид Голиков</h3>
			<p className={styles.speakerTitle}>
				Директор ГК «Институт Тренинга - АРБ Про», эксперт ЦБО
			</p>
			<div className={styles.logoContainer}>
				<ARBLogo />
				<Logo place='speakercard' />
			</div>
		</article>
	)
}
