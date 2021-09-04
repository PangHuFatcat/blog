import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import styles from './index.module.css'

interface Props {
    title?: string
}

const PageLayout = (props: PropsWithChildren<Props>) => {
    const { children, title = 'PangHu' } = props
    return (
        <div className={styles.pageLayout}>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            {children}
        </div>
    )
}

export default React.memo(PageLayout)
