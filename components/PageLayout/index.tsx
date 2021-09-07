import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import styles from './index.module.scss'

interface Props {
    title?: string
}

const PageLayout = (props: PropsWithChildren<Props>) => {
    const { children, title = 'PangHu' } = props
    return (
        <div className={styles.pageLayout}>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="周广俊, 前端, 博客, Blog, 简历" />
                <meta name="description" content="Panghu的博客, 记录美好生活☘️" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {children}
        </div>
    )
}

export default React.memo(PageLayout)
