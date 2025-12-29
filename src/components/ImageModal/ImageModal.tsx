'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import './ImageModal.css'

interface ImageModalProps {
	src: string
	alt?: string
	isOpen: boolean
	onClose: () => void
}

export function ImageModal({
	src,
	alt = '',
	isOpen,
	onClose,
}: ImageModalProps) {
	useEffect(() => {
		if (!isOpen) return

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		document.addEventListener('keydown', handleKeyDown)
		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.body.style.overflow = ''
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div className="image-modal-overlay" onClick={onClose}>
			<div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
				<button
					className="image-modal-close"
					onClick={onClose}
					aria-label="Cerrar imagen"
				>
					✕
				</button>

				<div className="image-modal-img-wrapper">
					<Image
						src={src}
						alt={alt}
						fill
						className="image-modal-img"
						sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
						quality={90}
						priority
					/>
				</div>
			</div>
		</div>
	)
}
