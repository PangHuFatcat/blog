import { MongoClient, MongoClientOptions } from 'mongodb'

class DB {
    static client: MongoClient

    static clientConnect: Promise<MongoClient>

    constructor() {}

    static init = () => {
        if (!process.env.MONGODB_URI) {
            throw new Error('似乎在 .env 里面没有配置 MONGODB_URI')
        }

        const options: MongoClientOptions = {}

        if (!DB.client) {
            console.log('没有DB.client: 创建')
            DB.client = new MongoClient(process.env.MONGODB_URI, options)
        }

        if (!DB.clientConnect) {
            console.log('DB.clientConnect: 创建')
            DB.clientConnect = DB.client.connect()
        }

        return DB.clientConnect
    }
}

export default DB
