import type { NextPage } from 'next'
import MasonryLayout from '../components/MasonryLayout'
import PageLayout from '../components/PageLayout'
import WidgetLayout from '../components/WidgetLayout'
import styles from './index.module.css'

const Index: NextPage = () => {
    return (
        <PageLayout>
            <MasonryLayout className={styles.index}>
                <WidgetLayout size="small">1</WidgetLayout>
                <WidgetLayout size="small">2</WidgetLayout>
                <WidgetLayout size="small">3</WidgetLayout>
                <WidgetLayout size="small">4</WidgetLayout>
                <WidgetLayout size="middle">5</WidgetLayout>
                <WidgetLayout size="large">6</WidgetLayout>
                <WidgetLayout size="extraLarge">7</WidgetLayout>
            </MasonryLayout>
        </PageLayout>
    )
}

export default Index
