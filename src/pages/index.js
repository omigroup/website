import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import { HomepageHeader } from '../components/HomepageHeader'
import { ValuesSection } from '../components/ValuesSection'
import { OmiDescription } from '../components/OmiDescription'

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <OmiDescription />
                <ValuesSection />
            </main>
        </Layout>
    )
}
