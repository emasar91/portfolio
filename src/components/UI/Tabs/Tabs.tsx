'use client'

import * as React from 'react'
import './Tabs.css'

interface TabsContextValue {
	activeTab: string
	setActiveTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

/* ================= Tabs ================= */

interface TabsProps {
	defaultValue: string
	children: React.ReactNode
}

export function Tabs({ defaultValue, children }: TabsProps) {
	const [activeTab, setActiveTab] = React.useState(defaultValue)

	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>
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

interface TabsContentProps {
	value: string
	children: React.ReactNode
}

export function TabsContent({ value, children }: TabsContentProps) {
	const context = React.useContext(TabsContext)
	if (!context) {
		throw new Error('TabsContent must be used inside Tabs')
	}

	const { activeTab } = context
	const isActive = activeTab === value

	return (
		<section
			role="tabpanel"
			className={`tabs-content ${isActive ? 'is-active' : ''}`}
			hidden={!isActive}
		>
			{children}
		</section>
	)
}
