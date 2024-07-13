import React from 'react'
import {
	Lead,
	PracticeActivities,
	Questions,
	TargetAudience,
} from '../../components'

export const Main = () => {
	return (
		<main>
			<Lead />
			<Questions />
			<TargetAudience />
			<PracticeActivities />
		</main>
	)
}
