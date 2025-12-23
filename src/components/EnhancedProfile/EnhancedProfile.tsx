'use client'

import Image from 'next/image'

import { getPersonalInfo, getAboutInfo } from '@/lib/data'
import './EnhancedProfile.css'

import { Card, CardContent } from '../UI/Card/Card'
import { Badge } from '../UI/Badge/Badge'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../UI/Tabs/Tabs'

import { LocationIcon } from '@/assets/icons/LocationIcon'
import { UserIcon } from '@/assets/icons/UserIcon'
import { MailIcon } from '@/assets/icons/MailIcon'
import { PhoneIcon } from '@/assets/icons/PhoneIcon'
import { ClockIcon } from '@/assets/icons/ClockIcon'
import { LanguageIcon } from '@/assets/icons/LanguageIcon'

export function EnhancedProfile() {
	const personalInfo = getPersonalInfo()
	const aboutInfo = getAboutInfo()

	console.log(
		'🚀 ~ EnhancedProfile ~ personalInfo.avatar:',
		personalInfo.avatar
	)
	return (
		<Card className="profile-card">
			<CardContent className="profile-card__content">
				{/* ================= Header ================= */}
				<header className="profile-header">
					<div className="profile-header__avatar">
						<Image
							src={personalInfo.avatar || '/placeholder.svg'}
							alt={personalInfo.name}
							fill
							className="profile-header__image"
						/>
					</div>

					<h2 className="profile-header__name">{personalInfo.name}</h2>
					<p className="profile-header__title">{personalInfo.title}</p>

					<div className="profile-header__location">
						<LocationIcon color="gray" />
						<span>{personalInfo.location}</span>
					</div>

					<div className="profile-header__badges">
						{personalInfo.badges.map((badge, index) => (
							<Badge key={index} variant="outline">
								{badge}
							</Badge>
						))}
					</div>

					<SocialLinks socialLinks={personalInfo.social} />
				</header>

				{/* ================= Tabs ================= */}
				<Tabs defaultValue="about">
					<TabsList>
						<TabsTrigger value="about">
							<UserIcon color="gray" />
							About
						</TabsTrigger>

						<TabsTrigger value="contact">
							<MailIcon color="gray" />
							Contact
						</TabsTrigger>
					</TabsList>

					{/* ================= About ================= */}
					<TabsContent value="about">
						<section className="profile-section">
							<h3 className="profile-section__title">
								<UserIcon color="gray" />
								About Me
							</h3>
							<p>{aboutInfo.bio}</p>
						</section>

						<section className="profile-section">
							<h3 className="profile-section__title">
								<LanguageIcon color="gray" />
								Languages
							</h3>

							<ul className="languages">
								{aboutInfo.languages.map((language, index) => (
									<li key={index} className="language">
										<div className="language__header">
											<span>{language.name}</span>
											<span className="language__level">
												{language.proficiency}
											</span>
										</div>

										<div className="language__bar">
											<span
												className="language__progress"
												style={{ width: `${language.level}%` }}
											/>
										</div>
									</li>
								))}
							</ul>
						</section>
					</TabsContent>

					{/* ================= Contact ================= */}
					<TabsContent value="contact">
						<ul className="contact-list">
							<li>
								<MailIcon color="gray" />
								<a href={`mailto:${personalInfo.email}`}>
									{personalInfo.email}
								</a>
							</li>

							<li>
								<PhoneIcon color="gray" />
								<a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
							</li>

							<li>
								<LocationIcon color="gray" />
								<span>{personalInfo.location}</span>
							</li>

							<li>
								<ClockIcon color="gray" />
								<span>{personalInfo.workingHours}</span>
							</li>
						</ul>
					</TabsContent>
				</Tabs>

				{/* ================= Footer ================= */}
				<footer className="profile-footer">
					<span
						className={`profile-footer__status ${
							personalInfo.availableForWork ? 'is-available' : 'is-unavailable'
						}`}
					/>
					<span>
						{personalInfo.availableForWork
							? 'Available for new projects'
							: 'Not available for new projects'}
					</span>
				</footer>
			</CardContent>
		</Card>
	)
}
