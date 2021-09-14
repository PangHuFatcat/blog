import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import PageLayout from '../components/PageLayout'
import WidgetLayout from '../components/WidgetLayout'
import IconFont from '../components/IconFont'
import { PhotoProvider, PhotoConsumer } from 'react-photo-view'
import mongodb from '../lib/mongodb'
import styles from './index.module.scss'

interface IndexProps {
    isConnected: boolean
}

const Index: NextPage<IndexProps> = (props) => {
    const { isConnected } = props
    const photoImages = [
        '/images/test/1.jpg',
        '/images/test/2.jpg',
        '/images/test/3.jpg',
        '/images/test/4.jpg',
        '/images/test/5.png',
        '/images/test/6.jpg',
        '/images/test/7.png',
        '/images/test/8.jpg',
        '/images/test/9.jpg',
    ]
    return (
        <PageLayout>
            <div className={styles.index}>
                <div className={styles.tool}>
                    <WidgetLayout styleType="capsule" className={styles.toolItem}>
                        <IconFont name="search" size={20} color="#444"></IconFont>
                        <span>搜索</span>
                    </WidgetLayout>
                    <WidgetLayout styleType="capsule" className={styles.toolItem}>
                        <IconFont name="document" size={20} color="#444"></IconFont>
                        <span>简历</span>
                    </WidgetLayout>
                    <WidgetLayout styleType="capsule" className={styles.toolItem}>
                        <IconFont name="picture" size={20} color="#444"></IconFont>
                        <span>相册</span>
                    </WidgetLayout>
                    <WidgetLayout styleType="capsule" className={styles.toolItem}>
                        <IconFont name="system" size={20} color="#444"></IconFont>
                        <span>设置</span>
                    </WidgetLayout>
                </div>
                <div className={styles.post}>
                    <WidgetLayout styleType="card">
                        <div>
                            <h1>从 iOS 14 到 Android 12，桌面小组件是怎么「文艺复兴」的</h1>
                            <p>
                                时尚无关，但这里要提啊伟大伟大伟大到的存 阿瓦达作系统选择，在新
                                啊伟大伟大啊吴大维
                                本文的主题虽然与时尚无关，但这里要提啊伟大伟大伟大到的存在，同样遵循着这一定律：桌面小组件在智能手机出现早期便已随之诞生，但直到智能手机操作系统高度成熟的
                                2020 年，重新被包括苹果 iOS
                                在内的主流操作系统选择，在新的需求下，重新作为手机系统更新的重要功能面向新的用户。
                            </p>
                            <div className={styles.photo}>
                                <PhotoProvider>
                                    {photoImages.map((item, index) => (
                                        <PhotoConsumer key={index} src={item} intro={item}>
                                            <div
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'grid',
                                                }}
                                            >
                                                <Image
                                                    className={styles.photoImage}
                                                    src={item}
                                                    alt=""
                                                    width={200}
                                                    height={200}
                                                    objectFit="cover"
                                                ></Image>
                                            </div>
                                        </PhotoConsumer>
                                    ))}
                                </PhotoProvider>
                            </div>
                            <p>What about the next?</p>
                            <p>is this real?</p>
                        </div>
                    </WidgetLayout>
                </div>
                <div className={styles.post}>
                    <WidgetLayout styleType="card">
                        <div>
                            <h1>完全是测一下换行而已</h1>
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
                <div className={styles.simpleEmpty}>暂无更多~</div>
            </div>
        </PageLayout>
    )
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
    const client = await mongodb()

    const database = client.db('sample_mflix')

    const movieDoc = database.collection('movies')

    const movies = movieDoc.find({})

    console.log(movies, 'movies')

    return {
        props: {
            isConnected: false,
            movies,
        },
    }
}

export default Index
