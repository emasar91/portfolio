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
		slug: 'trello-clone',
		title: 'Trello Clone',
		description: [
			'Este clon de Trello es un proyecto de portafolio centrado en modelar un flujo de trabajo Kanban realista, en lugar de simplemente replicar la interfaz de usuario de Trello».',
			'La aplicación permite a los usuarios administrar tableros, columnas y tarjetas a través de interacciones directas, haciendo hincapié en la administración de estados, la arquitectura frontend y la experiencia del usuario».',
			'Creado con Next.js (App Router) y TypeScript, el proyecto da prioridad a la escalabilidad, la facilidad de mantenimiento y una clara separación de responsabilidades, siguiendo los patrones que se utilizan habitualmente en los productos frontend del mundo real».',
		],
		features: [
			'Tablero estilo Kanban con columnas y tarjetas dinámicas',
			'Interacciones fluidas de arrastrar y soltar entre columnas',
			'Edición en línea del contenido de las tarjetas con retroalimentación inmediata',
			'Gestión global del estado mediante Zustand',
			'Separación clara entre los componentes de la interfaz de usuario, el estado y los servicios',
			'Diseño adaptable con un comportamiento coherente de la interfaz de usuario',
			'Arquitectura preparada para múltiples tableros y escalabilidad futura',
		],
		technologies: [
			'React',
			'Next.js',
			'TypeScript',
			'Firebase',
			'Zustand',
			'Css',
			'Dnd kit',
			'Axios',
		],
		coverImage: '/assets/images/trello/trello-clone.png',
		thumbnailImage: '/assets/images/trello/trello-clone.png',
		gallery: [
			{
				url: '/assets/images/trello/trello-screenshot-1.png',
				caption: 'Home Screen with Job Recommendations',
			},
			{
				url: '/assets/images/trello/trello-screenshot-2.png',
				caption: 'Job Detail View',
			},
			{
				url: '/assets/images/trello/trello-screenshot-3.png',
				caption: 'User Profile and Skills',
			},
			{
				url: '/assets/images/trello/trello-screenshot-4.png',
				caption: 'Application Tracking Dashboard',
			},
			{
				url: '/assets/images/trello/trello-screenshot-5.png',
				caption: 'Application Tracking Dashboard',
			},
			{
				url: '/assets/images/trello/trello-screenshot-6.png',
				caption: 'Application Tracking Dashboard',
			},
		],
		liveUrl: 'https://emasar-trello-clone.vercel.app',
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
