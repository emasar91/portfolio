'use client'

import Image from 'next/image'
import './CredentialsSection.css'

import { Card, CardContent } from '../UI/Card/Card'
import { getCredentialsInfo } from '@/lib/data'
import { AwardsIcon } from '@/assets/icons/AwardsIcon'
import { EducationIcon } from '@/assets/icons/EducationIcon'
import { SkillTag } from '@/app/page'

export function CredentialsSection() {
	const credentialsInfo = getCredentialsInfo()

	return (
		<Card className="credentials-card">
			<CardContent className="credentials-card__content">
				<header className="credentials-card__header">
					<AwardsIcon color="gray" />
					<h3>Credentials</h3>
				</header>

				<div className="credentials-card__sections">
					{/* ================= Certifications ================= */}
					<section className="credentials-section">
						<h4 className="credentials-section__title">
							<AwardsIcon />
							Professional Certifications
						</h4>

						<ul className="credentials-grid">
							{credentialsInfo.certifications.map((cert, index) => (
								<li key={index} className="credentials-item">
									{cert.logo && (
										<div className="credentials-item__logo">
											<Image
												src={cert.logo || '/placeholder.svg'}
												alt={cert.issuer}
												fill
												className="credentials-item__image"
											/>
										</div>
									)}

									<div>
										<h5>{cert.name}</h5>
										<p>
											{cert.issuer} • {cert.date}
										</p>
									</div>
								</li>
							))}
						</ul>
					</section>

					{/* ================= Education ================= */}
					<section className="credentials-section">
						<h4 className="credentials-section__title">
							<EducationIcon color="gray" />
							Education
						</h4>

						<ul className="credentials-list">
							{credentialsInfo.education.map((edu, index) => (
								<li key={index} className="credentials-item">
									{edu.logo && (
										<div className="credentials-item__logo">
											<Image
												src={edu.logo || '/placeholder.svg'}
												alt={edu.institution}
												fill
												className="credentials-item__image"
											/>
										</div>
									)}

									<div>
										<h5>{edu.degree}</h5>
										<p>
											{edu.institution} • {edu.year}
										</p>
									</div>
								</li>
							))}
						</ul>
					</section>

					{/* ================= Skills ================= */}
					<section className="credentials-section">
						<h4 className="credentials-section__title">
							<AwardsIcon color="gray" />
							Skills & Expertise
						</h4>

						<div className="credentials-skills">
							{credentialsInfo.skills.map((skill, index) => (
								<SkillTag key={index}>{skill}</SkillTag>
							))}
						</div>
					</section>
				</div>
			</CardContent>
		</Card>
	)
}
