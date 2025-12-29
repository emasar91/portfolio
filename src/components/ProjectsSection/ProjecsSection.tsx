import { WorldIcon } from '@/assets/icons/WorldIcon'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { getAllProjects } from '@/lib/projects'
import './ProjecsSection.css'

export default function ProjecsSection() {
	const projects = getAllProjects()

	return (
		<section className="card" id="proyectos">
			<div className="card__content">
				<header className="section-header section-header--space">
					<div className="section-header__left">
						<WorldIcon />
						<h3>Proyectos Recientes</h3>
					</div>
				</header>

				<div className="projects-grid">
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	)
}
