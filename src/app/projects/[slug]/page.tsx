import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/data'
import { PortfolioHeader } from '@/components/PortfolioHeader/PortfolioHeader'
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon'
import { EnhancedScrollIndicator } from '@/components/EnhancedScrollIndicator/EnhancedScrollIndicator'
import Footer from '@/components/Footer/Footer'
import HeroSection from '@/components/HeroSection/HeroSection'
import ProjectContentSection from '@/components/ProjectContentSection/ProjectContentSection'
import ProjectSidebar from '@/components/ProjectSidebar/ProjectSidebar'
import './Projects.css'

interface ProjectPageProps {
	params: {
		slug: string
	}
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params
	const project = getProjectBySlug(slug)

	if (!project) {
		notFound()
	}

	return (
		<main className="project-page">
			<div className="background-grid" aria-hidden />

			<PortfolioHeader />

			<div className="project-container">
				{/* Back */}
				<nav className="project-nav">
					<Link href="/" className="project-back">
						<ArrowLeftIcon />
						Back to Portfolio
					</Link>
				</nav>

				<section className="project-layout">
					{/* HERO */}
					<HeroSection project={project} />

					{/* CONTENT */}
					<ProjectContentSection project={project} />

					{/* SIDEBAR */}
					<ProjectSidebar project={project} />
				</section>

				<Footer />
			</div>

			<EnhancedScrollIndicator />
		</main>
	)
}
