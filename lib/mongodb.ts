import { MongoClient, MongoClientOptions } from 'mongodb'

class DB {
    static client: MongoClient

    static clientConnect: Promise<MongoClient>

    constructor() {}

    static connect = (): Promise<MongoClient> => {
        if (!process.env.MONGODB_URI) {
            throw new Error('似乎在 .env 里面没有配置 MONGODB_URI')
        }

        const options: MongoClientOptions = {}

        // 开发热更会导致重新连接, 需要关闭
        if (process.env.NODE_ENV === 'development') {
            // @ts-ignore
            if (!global._mongoClientConnect) {
                DB.client = new MongoClient(process.env.MONGODB_URI, options)
                // @ts-ignore
                global._mongoClientConnect = DB.client.connect()
              }
              console.log('开发模式获取', 'global._mongoClientConnect')
              // @ts-ignore
              DB.clientConnect = global._mongoClientConnect
        } else {
            if (!DB.client) {
                console.log('没有DB.client: 创建')
                DB.client = new MongoClient(process.env.MONGODB_URI, options)
            }
    
            if (!DB.clientConnect) {
                console.log('DB.clientConnect: 创建')
                DB.clientConnect = DB.client.connect()
            }
        }
        
        console.log('已经返回 clientConnect 实例')

        return DB.clientConnect
        
    }
}

export default DB
