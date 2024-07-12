import React from 'react'
import styles from './CTA.module.scss'
import { clsx } from 'clsx'

interface ICTAProps {
	path: string
	linkText?: string
	type?: string
}

export const CTA = ({
	path,
	linkText = 'Узнать стоимость',
	type,
}: ICTAProps) => {
	return (
		<a
			href={path}
			className={clsx(styles.root, {
				[styles.rootTypeHeader]: type === 'header',
				[styles.rootTypeLead]: type === 'lead',
			})}
		>
			{linkText}
		</a>
	)
}
