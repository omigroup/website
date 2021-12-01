import React from 'react'
import clsx from 'clsx'
import styles from './OmiDescription.module.css'

import CoreValuesUrl from '@site/static/img/core-values.png'

export const OmiDescription = () => {
    return (
        <section>
            <div className={styles.coreValuesContainer}>
                <img src={CoreValuesUrl} />
            </div>
        </section>
    )
}
