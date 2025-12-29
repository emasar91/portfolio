import Image from 'next/image'
import { Project } from '@/lib/projects'
import './HeroSection.css'

function HeroSection({ project }: { project: Project }) {
	return (
		<article className="project-hero">
			<figure className="hero-media">
				<Image
					src={project.coverImage}
					alt={project.title}
					fill={true}
					className="hero-image"
				/>
				<figcaption className="hero-caption">
					<h1>{project.title}</h1>
				</figcaption>
			</figure>
		</article>
	)
}

export default HeroSection
