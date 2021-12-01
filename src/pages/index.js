import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import { HomepageHeader } from '../components/HomepageHeader'
import { OmiDescription } from '../components/OmiDescription'

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Open Metaverse Interoperability Group aims to help bridge virtual worlds by designing and promoting shared
            protocols"
        >
            <HomepageHeader />
            <main>
                <OmiDescription />
            </main>
        </Layout>
    )
}
