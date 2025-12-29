import { Project } from '@/lib/projects'
import Image from 'next/image'
import { OpenliveIcon } from '@/assets/icons/OpenliveIcon'
import './ProjectContentSection.css'

function ProjectContentSection({ project }: { project: Project }) {
	return (
		<section className="project-content">
			<article className="content">
				<h2>Descripción general del proyecto</h2>

				<div>
					{project.description.map((p, i) => (
						<p key={i}>{p}</p>
					))}
				</div>

				<h3>Características principales</h3>
				<ul className="project-list">
					{project.features.map((feature, i) => (
						<li key={i}>{feature}</li>
					))}
				</ul>

				<h3>Tecnologías Utilizadas</h3>
				<ul className="project-tags-list">
					{project.technologies.map((tech, index) => (
						<span key={index} className="project-tag">
							{tech}
						</span>
					))}
				</ul>

				<div className="project-actions">
					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary"
						>
							<OpenliveIcon />
							Demo en vivo
						</a>
					)}
				</div>
			</article>

			{/* GALLERY */}
			{project.gallery && project.gallery.length > 0 && (
				<article className="content project-gallery">
					<h2>Galería del Proyecto</h2>

					<div className="gallery">
						{project.gallery.map((img, i) => (
							<figure key={i} className="gallery-item">
								<Image
									src={img.url}
									alt={img.caption}
									fill
									className="gallery-image"
								/>
							</figure>
						))}
					</div>
				</article>
			)}
		</section>
	)
}

export default ProjectContentSection
