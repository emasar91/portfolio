'use client'

import Image from 'next/image'
import Link from 'next/link'
import './ProjectCard.css'

interface ProjectCardProps {
	title: string
	category: string
	thumbnailImage: string
	slug: string
}

export function ProjectCard({
	title,
	category,
	thumbnailImage,
	slug,
}: ProjectCardProps) {
	return (
		<article className="project-card">
			<Link
				href={`/projects/${slug}`}
				className="project-card__link"
				aria-label={`View project ${title}`}
			>
				<div className="project-card__media">
					<Image
						src={thumbnailImage || '/placeholder.svg'}
						alt={title}
						fill
						className="project-card__image"
						priority={false}
					/>

					<div className="project-card__overlay" />

					<div className="project-card__info">
						<span className="project-card__category">{category}</span>
						<h3 className="project-card__title">{title}</h3>
					</div>
				</div>
			</Link>
		</article>
	)
}
