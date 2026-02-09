export interface ProjectGalleryImage {
  url: string
  caption: string
}

export interface RelatedProject {
  slug: string
  title: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    slug: "trello-clone",
    title: "Trello Clone",
    description: [
      "Clon funcional de Trello desarrollado como proyecto de portafolio, enfocado en reproducir un flujo Kanban realista y en demostrar buenas prácticas de arquitectura frontend, más allá de la apariencia visual.",
      "La aplicación permite gestionar tableros, columnas y tarjetas mediante interacciones directas, con especial énfasis en la gestión de estado global, la separación de responsabilidades y una experiencia de usuario fluida.",
      "Construido con Next.js (App Router) y TypeScript, el proyecto está pensado para ser escalable, mantenible y extensible, siguiendo patrones utilizados en productos frontend de nivel profesional.",
    ],
    features: [
      "Modelado de un flujo Kanban completo con tableros, columnas y tarjetas dinámicas",
      "Implementación de drag & drop entre columnas utilizando dnd-kit",
      "Edición en línea de tarjetas con feedback inmediato y manejo optimizado del estado",
      "Gestión de estado global con Zustand, desacoplada de la capa de UI",
      "Arquitectura frontend con separación clara entre UI, estado y servicios",
      "Diseño responsive con comportamiento consistente en desktop y mobile",
      "Base arquitectónica preparada para múltiples tableros y crecimiento futuro",
      "Sincronización inmediata con base de datos NoSQL para asegurar que el orden de las tarjetas se mantenga tras recargar la página.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "Zustand",
      "Css",
      "Dnd kit",
      "Axios",
      "MongoDb",
    ],
    coverImage: "/assets/images/trello/trello-clone.png",
    thumbnailImage: "/assets/images/trello/trello-clone.png",
    gallery: [
      {
        url: "/assets/images/trello/trello-screenshot-1.png",
        caption: "Home Screen with Job Recommendations",
      },
      {
        url: "/assets/images/trello/trello-screenshot-2.png",
        caption: "Job Detail View",
      },
      {
        url: "/assets/images/trello/trello-screenshot-3.png",
        caption: "User Profile and Skills",
      },
      {
        url: "/assets/images/trello/trello-screenshot-4.png",
        caption: "Application Tracking Dashboard",
      },
      {
        url: "/assets/images/trello/trello-screenshot-5.png",
        caption: "Application Tracking Dashboard",
      },
      {
        url: "/assets/images/trello/trello-screenshot-6.png",
        caption: "Application Tracking Dashboard",
      },
    ],
    liveUrl: "https://emasar-trello-clone.vercel.app",
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
