import { GithubIcon } from '@/assets/icons/GithubIcon'
import './SocialLinks.css'
import { LinkedInIcon } from '@/assets/icons/LinkedInIcon'

interface SocialLink {
	platform: string
	url: string
	icon: string
}

interface SocialLinksProps {
	socialLinks: SocialLink[]
}

const icons = {
	github: <GithubIcon />,
	linkedin: <LinkedInIcon />,
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
	return (
		<div className="social-links">
			{socialLinks.map((link, index) => (
				<a
					key={index}
					href={link.url}
					className="social-link"
					aria-label={link.platform}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="social-link__icon">
						{icons[link.icon as keyof typeof icons]}
					</span>
				</a>
			))}
		</div>
	)
}
