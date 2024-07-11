import React from 'react'

interface ICTAProps {
	path: string
	linkText?: string
}

export const CTA = ({ path, linkText = 'Узнать стоимость' }: ICTAProps) => {
	return <a href={path}>{linkText}</a>
}
