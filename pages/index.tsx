import type { NextPage } from 'next'
import PageLayout from '../components/PageLayout'
import WidgetLayout from '../components/WidgetLayout'
import IconFont from '../components/IconFont'
import styles from './index.module.css'

const Index: NextPage = () => {
    return (
        <PageLayout>
            <div className={styles.index}>
                <WidgetLayout size="small">
                    <IconFont name="favorite"></IconFont>
                </WidgetLayout>
                <WidgetLayout size="small">
                    <IconFont name="smiley"></IconFont>
                </WidgetLayout>
                <h1>测试字体他们所有的设备和仪器彷佛都是有生命的。</h1>
                <h1>测试字体Almost before we knew it, we had left the ground.</h1>
                <p>测试字体测试字体测试字体测试字体测</p>
                <p>你好你好</p>
            </div>
        </PageLayout>
    )
}

export default Index
