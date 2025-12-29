import React from 'react'
import { CodeIcon } from '@/assets/icons/CodeIcon'
import { SkillTag } from '@/app/page'
import { getTechnicalSkillsInfo } from '@/lib/data'
import './TecnicalSkills.css'

function TecnicalSkills() {
	const technicalSkills = getTechnicalSkillsInfo()

	return (
		<section className="card" id="habilidades">
			<div className="card__content">
				<header className="section-header">
					<CodeIcon />
					<h3 className="section-header__title">Habilidades Técnicas</h3>
				</header>

				<div className="skills-grid">
					{Object.entries(technicalSkills).map(([key, list]) => (
						<div key={key} className="skills-group">
							<h4>{key}</h4>
							<div className="skills-list">
								{list.map((skill: string, i: number) => (
									<SkillTag key={i}>{skill}</SkillTag>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TecnicalSkills
