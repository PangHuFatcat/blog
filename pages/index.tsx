import type { NextPage } from 'next'
import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import WidgetLayout from '../components/WidgetLayout'
import styles from './index.module.css'

const Index: NextPage = () => {
    return (
        <PageLayout>
            <div className={styles.index}>
                <WidgetLayout size="small">1</WidgetLayout>
                <WidgetLayout size="small">2</WidgetLayout>
                <WidgetLayout size="middle">3</WidgetLayout>
                <WidgetLayout size="large">4</WidgetLayout>
                <WidgetLayout size="extraLarge">5</WidgetLayout>
            </div>
        </PageLayout>
    )
}

export default Index
