import { Project } from '@/lib/projects'
import './ProjectSidebar.css'

function ProjectSidebar({ project }: { project: Project }) {
	return (
		<aside className="project-sidebar">
			<article className="content">
				<h2>Detalles del Proyecto</h2>

				<div className="project-detail">
					<h3>Cliente</h3>
					<p>{project.client || 'Proyecto Personal'}</p>
				</div>
			</article>
		</aside>
	)
}

export default ProjectSidebar
