'use client'

import * as React from 'react'
import './Tabs.css'

interface TabsContextValue {
	activeTab: string
	setActiveTab: (value: string) => void
	heights: Record<string, number>
	setHeight: (key: string, height: number) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

/* ================= Tabs ================= */

interface TabsProps {
	defaultValue: string
	children: React.ReactNode
}

export function Tabs({ defaultValue, children }: TabsProps) {
	const [activeTab, setActiveTab] = React.useState(defaultValue)
	const [heights, setHeights] = React.useState<Record<string, number>>({})

	const setHeight = React.useCallback((key: string, height: number) => {
		setHeights((prev) => {
			if (prev[key] === height) return prev
			return { ...prev, [key]: height }
		})
	}, [])

	return (
		<TabsContext.Provider
			value={{ activeTab, setActiveTab, heights, setHeight }}
		>
			<div className="tabs">{children}</div>
		</TabsContext.Provider>
	)
}

/* ================= TabsList ================= */

export function TabsList({ children }: { children: React.ReactNode }) {
	return (
		<div role="tablist" className="tabs-list">
			{children}
		</div>
	)
}

/* ================= TabsTrigger ================= */

interface TabsTriggerProps {
	value: string
	children: React.ReactNode
	disabled?: boolean
}

export function TabsTrigger({
	value,
	children,
	disabled = false,
}: TabsTriggerProps) {
	const context = React.useContext(TabsContext)
	if (!context) {
		throw new Error('TabsTrigger must be used inside Tabs')
	}

	const { activeTab, setActiveTab } = context
	const isActive = activeTab === value

	return (
		<button
			type="button"
			role="tab"
			aria-selected={isActive}
			disabled={disabled}
			className={`tabs-trigger ${isActive ? 'is-active' : ''}`}
			onClick={() => setActiveTab(value)}
		>
			{children}
		</button>
	)
}

/* ================= TabsContent ================= */

type TabsContentProps = {
	value: string
	children: React.ReactNode
}

export function TabsContent({ value, children }: TabsContentProps) {
	const context = React.useContext(TabsContext)
	if (!context) throw new Error('TabsContent must be used inside Tabs')

	const { activeTab, setHeight } = context
	const isActive = activeTab === value
	const ref = React.useRef<HTMLDivElement>(null)

	React.useLayoutEffect(() => {
		if (!ref.current) return

		const element = ref.current

		const updateHeight = () => {
			setHeight(value, element.scrollHeight)
		}

		updateHeight() // inicial

		const observer = new ResizeObserver(updateHeight)
		observer.observe(element)

		return () => observer.disconnect()
	}, [setHeight, value])

	return (
		<section
			ref={ref}
			role="tabpanel"
			data-state={isActive ? 'active' : 'inactive'}
			aria-hidden={!isActive}
			className="tabs-content"
		>
			{children}
		</section>
	)
}

/* ================= TabsContentWrapper ================= */

type Props = {
	children: React.ReactNode
}

export function TabsContentWrapper({ children }: Props) {
	const context = React.useContext(TabsContext)
	if (!context) throw new Error('TabsContentWrapper must be used inside Tabs')

	const { activeTab, heights } = context

	return (
		<div
			className="tabs-content-wrapper"
			style={{
				height: heights[activeTab] ? `${heights[activeTab]}px` : 'auto',
			}}
		>
			{children}
		</div>
	)
}
