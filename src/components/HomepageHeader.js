import React from 'react'
import clsx from 'clsx'
import styles from './HomepageHeader.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={styles.heroBanner}>
            <h1 className={clsx('margin-bottom--sm')}>{siteConfig.title}</h1>
            <h3 className={clsx('margin-bottom--lg')}>{siteConfig.tagline}</h3>
            <div className={styles.heroButtonContainer}>
                <a
                    href="https://discord.gg/NJtT9grz5E"
                    className={clsx(
                        'button button--secondary',
                        styles.heroButton
                    )}
                >
                    Join Us in Discord
                </a>
                <a
                    href="https://github.com/omigroup/OMI"
                    className={clsx(
                        'button button--secondary',
                        styles.heroButton
                    )}
                >
                    GitHub Repo
                </a>
            </div>
        </header>
    )
}
