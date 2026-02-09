import { Project } from "@/lib/projects"
import { projects } from "@/lib/data"
import "./ProjectSidebar.css"
import Link from "next/link"
import Image from "next/image"
function ProjectSidebar({ project }: { project: Project }) {
  const otherProjects = projects.filter((p) => p.slug !== project.slug)

  return (
    <aside className="project-sidebar">
      <article className="content">
        <h2>Detalles del Proyecto</h2>

        <div className="project-detail">
          <h3>Cliente</h3>
          <p>{project.client || "Proyecto Personal"}</p>
        </div>
      </article>

      <article className="content">
        <h2>Otros Proyectos</h2>

        {otherProjects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="project-sidebar__link"
          >
            <Image src={p.icon} alt={p.title} width={64} height={64} />
            <p className="project-sidebar__title">{p.title}</p>
          </Link>
        ))}
      </article>
    </aside>
  )
}

export default ProjectSidebar
