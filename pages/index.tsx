import type { NextPage } from 'next'
import PageLayout from '../components/PageLayout'
import WidgetLayout from '../components/WidgetLayout'
import IconFont from '../components/IconFont'
import styles from './index.module.scss'

const Index: NextPage = () => {
    return (
        <PageLayout>
            <div className={styles.index}>
                <div className={styles.banner}>
                    <WidgetLayout>自适应</WidgetLayout>
                    <div className={styles.tool}>
                        <WidgetLayout size="small">
                            <IconFont name="document"></IconFont>
                            <span>简历</span>
                        </WidgetLayout>
                        <WidgetLayout size="small">
                            <IconFont name="system"></IconFont>
                            <span>设置</span>
                        </WidgetLayout>
                        <WidgetLayout size="small">
                            <IconFont name="picture"></IconFont>
                            <span>图片</span>
                        </WidgetLayout>
                        <WidgetLayout size="small">
                            <IconFont name="send"></IconFont>
                            <span>发送</span>
                        </WidgetLayout>
                    </div>
                </div>
                <div className={styles.post}>
                    <WidgetLayout>
                        <div>
                            <h1>从 iOS 14 到 Android 12，桌面小组件是怎么「文艺复兴」的</h1>
                            <p>
                                时尚界一直以来有一个著名的理论：在某一时代流行的时尚元素，在经过一段时间的沉寂之后，会被人们再次拿出来利用。
                                这便是「弗莱定律」，它解释了为什么在长期的历史中，为什么很多曾经时尚的设计会随着设计审美的变化变过时，又随着时间的推移逐渐被人记起，重新焕发生机。
                                本文的主题虽然与时尚无关，但这里要提到的存在，同样遵循着这一定律：桌面小组件在智能手机出现早期便已随之诞生，但直到智能手机操作系统高度成熟的
                                2020 年，重新被包括苹果 iOS
                                在内的主流操作系统选择，在新的需求下，重新作为手机系统更新的重要功能面向新的用户。
                            </p>
                        </div>
                    </WidgetLayout>
                </div>
            </div>
        </PageLayout>
    )
}

export default Index
