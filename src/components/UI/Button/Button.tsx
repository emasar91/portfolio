'use client'

import * as React from 'react'
import './Button.css'

export type ButtonVariant =
	| 'default'
	| 'destructive'
	| 'outline'
	| 'secondary'
	| 'ghost'
	| 'link'

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className = '',
			variant = 'default',
			size = 'default',
			disabled,
			children,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={`btn btn--${variant} btn--${size} ${className}`}
				disabled={disabled}
				{...props}
			>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'

export { Button }
