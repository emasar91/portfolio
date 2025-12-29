import { BriefCaseIcon } from '@/assets/icons/BriefCaseIcon'
import { getExperienceInfo } from '@/lib/data'
import { ExperienceCard } from '../ExperienceCard/ExperienceCard'
import './ExperienceSection.css'

function ExperienceSection() {
	const experienceInfo = getExperienceInfo()

	return (
		<section className="card" id="experiencia">
			<div className="card__content">
				<header className="section-header">
					<BriefCaseIcon />
					<h3 className="section-header__title">Experience</h3>
				</header>

				<div className="experience-list">
					{experienceInfo.map((experience, index) => (
						<ExperienceCard key={index} {...experience} />
					))}
				</div>
			</div>
		</section>
	)
}

export default ExperienceSection
