'use client'

import Image from 'next/image'

import { getPersonalInfo, getAboutInfo } from '@/lib/data'
import './EnhancedProfile.css'

import { Badge } from '../UI/Badge/Badge'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import {
	Tabs,
	TabsContent,
	TabsContentWrapper,
	TabsList,
	TabsTrigger,
} from '../UI/Tabs/Tabs'

import { LocationIcon } from '@/assets/icons/LocationIcon'
import { UserIcon } from '@/assets/icons/UserIcon'
import { MailIcon } from '@/assets/icons/MailIcon'
import { PhoneIcon } from '@/assets/icons/PhoneIcon'
import { LanguageIcon } from '@/assets/icons/LanguageIcon'

export function EnhancedProfile() {
	const personalInfo = getPersonalInfo()
	const aboutInfo = getAboutInfo()
	return (
		<aside className="home__profile">
			<div
				className="profile-card"
				style={{
					backgroundColor: '#111113',
					borderRadius: '0.5rem',
					border: '1px solid var(--card-border, #27272a)',
					boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
					padding: '0',
				}}
			>
				<div className="profile-card__content">
					{/* ================= Header ================= */}
					<header className="profile-header">
						<div className="profile-header__info">
							<div className="profile-header__avatar">
								<Image
									src={'/placeholder.svg'}
									alt={personalInfo.name}
									fill
									className="profile-header__image"
								/>
							</div>

							<h2 className="profile-header__name">{personalInfo.name}</h2>
							<p className="profile-header__title">{personalInfo.title}</p>

							<div className="profile-header__location">
								<LocationIcon width={12} height={12} />
								<span>{personalInfo.location}</span>
							</div>
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
								<UserIcon />
								<span className="title__tab">About</span>
							</TabsTrigger>

							<TabsTrigger value="contact">
								<MailIcon />
								<span className="title__tab">Contact</span>
							</TabsTrigger>
						</TabsList>

						<TabsContentWrapper>
							{/* ================= About ================= */}
							<TabsContent value="about">
								<section className="profile-section">
									<h3 className="profile-section__title">
										<UserIcon color="#22d3ee" />
										Sobre Mi
									</h3>
									<p className="profile-section__bio">{aboutInfo.bio}</p>
								</section>

								<section className="profile-section">
									<h3 className="profile-section__title">
										<LanguageIcon />
										Idiomas
									</h3>

									<ul className="languages">
										{aboutInfo.languages.map((language, index) => (
											<li
												key={index}
												className={`language ${
													index === aboutInfo.languages.length - 1
														? 'language__last'
														: ''
												}`}
											>
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
									<li className="contact-list__item">
										<div className="contact-list__icon">
											<MailIcon />
										</div>
										<div className="contact-list__data">
											<h4 className="contact-list__label">Email</h4>
											<span className="contact-list__value">
												{personalInfo.email}
											</span>
										</div>
									</li>

									<li className="contact-list__item">
										<div className="contact-list__icon">
											<PhoneIcon />
										</div>
										<div className="contact-list__data">
											<h4 className="contact-list__label">Telefono</h4>
											<span className="contact-list__value">
												{personalInfo.phone}
											</span>
										</div>
									</li>

									<li className="contact-list__item">
										<div className="contact-list__icon">
											<LocationIcon width={20} height={20} color="#22d3ee" />
										</div>
										<div className="contact-list__data">
											<h4 className="contact-list__label">Ubicacion</h4>
											<span className="contact-list__value">
												{personalInfo.location}
											</span>
										</div>
									</li>
								</ul>
							</TabsContent>
						</TabsContentWrapper>
					</Tabs>

					{/* ================= Footer ================= */}
					<footer className="profile-footer">
						<span
							className={`profile-footer__status ${
								personalInfo.availableForWork
									? 'is-available'
									: 'is-unavailable'
							}`}
						/>
						<span className="profile-footer__text">
							{personalInfo.availableForWork
								? 'Disponible para nuevos proyectos'
								: 'No disponible para nuevos proyectos'}
						</span>
					</footer>
				</div>
			</div>
		</aside>
	)
}
