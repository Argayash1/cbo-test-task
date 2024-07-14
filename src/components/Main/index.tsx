import React from 'react'
import {
	AboutAuthor,
	AboutPractiсum,
	HowItWillGo,
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
			<HowItWillGo />
			<AboutAuthor />
			<AboutPractiсum />
		</main>
	)
}
