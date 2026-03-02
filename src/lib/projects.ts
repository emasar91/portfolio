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
  icon: string
}

const projects: Project[] = [
  {
    id: 1,
    slug: "trello-clone",
    icon: "/assets/images/trello/trello.png",
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
      "Firebase (Authentication, Realtime Database, Storage)",
      "Zustand",
      "Css",
      "Dnd kit (Drag & Drop)",
      "Axios",
      "MongoDb",
      "Next-intl (Internacionalización)",
      "Next-themes (Gestión de Temas)",
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
  {
    id: 2,
    slug: "telegram-clone",
    icon: "/assets/images/telegram/telegram.png",
    title: "Telegram Clone",
    description: [
      "Clon funcional de Telegram desarrollado como proyecto de portafolio, enfocado en replicar una experiencia de mensajería en tiempo real y en demostrar buenas prácticas de arquitectura frontend, priorizando la experiencia de usuario y la integración con servicios externos.",
      "La aplicación permite la comunicación entre usuarios mediante chats individuales y grupales, envío de archivos multimedia y videollamadas, con especial énfasis en la sincronización en tiempo real, el manejo del estado y la escalabilidad de la interfaz.",
      "Construido con Next.js (App Router) y TypeScript, el proyecto prioriza la mantenibilidad, la separación de responsabilidades y la integración eficiente con servicios backend, siguiendo patrones utilizados en aplicaciones modernas de mensajería y comunicación en tiempo real.",
    ],
    features: [
      "Implementación de un sistema de mensajería en tiempo real utilizando Stream para chats y videollamadas",
      "Envío y recepción de mensajes, imágenes y videos con actualización instantánea de la conversación",
      "Panel de notificaciones en tiempo real que informa nuevas interacciones, mensajes y llamadas entrantes",
      "Sistema de autenticación y gestión de usuarios mediante Clerk",
      "Persistencia de usuarios, conversaciones y eventos utilizando Convex como backend serverless",
      "Gestión completa del ciclo de llamadas (iniciar, rechazar, abandonar y finalizar)",
      "Implementación de un Chat AI integrado utilizando el SDK de Groq, diseñado para conversaciones naturales y asistencia dentro de la aplicación",
      "Diseño responsive con comportamiento consistente en desktop y mobile",
    ],
    technologies: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Toastify",
      "Lucide Icons",
      "Stream (Chat y Video SDK)",
      "Clerk (Autenticación)",
      "Convex (Backend serverless y base de datos en tiempo real)",
      "Groq SDK (Chat AI)",
      "Next-intl (Internacionalización)",
      "Next-themes (Gestión de Temas)",
    ],
    coverImage: "/assets/images/telegram/telegram-clone.png",
    thumbnailImage: "/assets/images/telegram/telegram-clone.png",
    gallery: [
      {
        url: "/assets/images/telegram/telegram-screenshot-1.png",
        caption: "Home Screen with skills",
      },
      {
        url: "/assets/images/telegram/telegram-screenshot-2.png",
        caption: "Empty chat View",
      },
      {
        url: "/assets/images/telegram/telegram-screenshot-3.png",
        caption: "New Chat whit Bot as default",
      },
      {
        url: "/assets/images/telegram/telegram-screenshot-4.png",
        caption: "Chat View with messages",
      },
      {
        url: "/assets/images/telegram/telegram-screenshot-5.png",
        caption: "Incomming call notification",
      },
      {
        url: "/assets/images/telegram/telegram-screenshot-6.png",
        caption: "Message notification",
      },
    ],
    liveUrl: "https://emasar-telegram-clone.vercel.app",
  },
  {
    id: 3,
    slug: "dashboard-dummy",
    icon: "/assets/images/dashboard/dashboard-dummy.png",
    title: "Dashboard Dummy",
    description: [
      "Panel de administración de alto rendimiento desarrollado como proyecto de portafolio, diseñado para la visualización avanzada de datos y gestión de inventario. El enfoque principal fue transformar datos crudos de una API externa en una experiencia de usuario intuitiva, priorizando la claridad visual, el rendimiento mediante estrategias de caching y una interfaz adaptable de última generación.",
      "La aplicación consume datos de la API DummyJSON, realizando cálculos complejos en el cliente para generar métricas de negocio personalizadas (ingresos, promedios de stock, valuaciones de inventario) que no están presentes de forma nativa en la respuesta del servidor.",
      "Construido con Next.js (App Router) y TypeScript, el proyecto demuestra un dominio avanzado de la arquitectura frontend, implementando un sistema de diseño 'Apple-inspired' que equilibra una gran densidad de información con una estética limpia y funcional, garantizando una navegación fluida tanto en desktop como en dispositivos móviles.",
    ],
    features: [
      "Visualización de Datos Avanzada: Implementación de gráficos dinámicos utilizando Recharts, optimizados con un estilo minimalista para maximizar la legibilidad en espacios reducidos.",
      "Gestión de Estado y Caching: Uso estratégico de TanStack Query (React Query) y Axios para centralizar las peticiones, evitar redundancia de red y garantizar una interfaz instantánea mediante el cacheo de datos.",
      "Arquitectura de UI Responsiva: Diseño de componentes complejos (Drawers, Tablas y Gráficos) adaptados específicamente para resoluciones móviles, asegurando accesibilidad completa en pantallas pequeñas.",
      "Soporte Multi-idioma (i18n): Integración completa de next-intl para una experiencia globalizada.",
      "Experiencia de Usuario Refinada: Sistema de cambio de tema (Dark/Light Mode) con detección automática del sistema y persistencia de estado mediante next-themes.",
      "Dashboard Inteligente: Procesamiento de datos de la API para mostrar KPIs críticos como Alertas de Stock Bajo, Top de Productos por Rating y análisis de Ingresos por Categoría.",
      "Componentes de Alta Calidad: Uso de Shadcn UI personalizado para mantener una estética coherente, profesional y altamente funcional.",
    ],
    technologies: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Shadcn UI",
      "Lucide Icons",
      "TanStack Query (React Query)",
      "Axios",
      "Next-intl (Internacionalización)",
      "Next-themes (Gestión de Temas)",
    ],
    coverImage: "/assets/images/dashboard/dashboard.png",
    thumbnailImage: "/assets/images/dashboard/dashboard.png",
    gallery: [
      {
        url: "/assets/images/dashboard/dashboard-screenshot-1.png",
        caption: "Home Screen with dark mode",
      },
      {
        url: "/assets/images/dashboard/dashboard-screenshot-2.png",
        caption: "Home Screen with light mode",
      },
      {
        url: "/assets/images/dashboard/dashboard-screenshot-3.png",
        caption: "Product Section",
      },
      {
        url: "/assets/images/dashboard/dashboard-screenshot-4.png",
        caption: "Orders Section",
      },
      {
        url: "/assets/images/dashboard/dashboard-screenshot-5.png",
        caption: "Discounts Section",
      },
      {
        url: "/assets/images/dashboard/dashboard-screenshot-6.png",
        caption: "Categories Section",
      },
    ],
    liveUrl: "https://emasar-dummy-dashboard.vercel.app",
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
