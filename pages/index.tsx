import type { GetServerSideProps, NextPage } from 'next'
import PageLayout from '../components/PageLayout'
import WidgetLayout from '../components/WidgetLayout'
import mongodb from '../lib/mongodb'
import styles from './index.module.scss'

interface Post {
    title: string
    content: string
}
interface IndexProps {
    posts: Post[]
}

const Index: NextPage<IndexProps> = (props) => {
    const { posts } = props
    return (
        <PageLayout>
            <div className={styles.index}>
                {posts.map((item, index) => (
                    <div className={styles.post} key={index}>
                        <WidgetLayout styleType="card">
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>
                            </div>
                        </WidgetLayout>
                    </div>
                ))}
            </div>
        </PageLayout>
    )
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
    const client = await mongodb()

    const database = client.db('test_db')

    const posts = database.collection<Post>('post')

    const postArray = await posts.find<Post>({}, { projection: { _id: 0 } }).toArray()

    return {
        props: {
            posts: postArray,
        },
    }
}

export default Index
