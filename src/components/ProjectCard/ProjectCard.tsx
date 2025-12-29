'use client'

import Image from 'next/image'
import Link from 'next/link'
import './ProjectCard.css'

interface ProjectCardProps {
	title: string
	thumbnailImage: string
	slug: string
}

export function ProjectCard({ title, thumbnailImage, slug }: ProjectCardProps) {
	return (
		<article className="project-card">
			<Link
				href={`/projects/${slug}`}
				className="project-card__link"
				aria-label={`Ver proyecto ${title}`}
			>
				<div className="project-card__media">
					<Image
						src={thumbnailImage}
						alt={title}
						fill
						className="project-card__image"
						priority={false}
					/>

					<div className="project-card__overlay" />

					<div className="project-card__info">
						<h3 className="project-card__title">{title}</h3>
					</div>
				</div>
			</Link>
		</article>
	)
}
