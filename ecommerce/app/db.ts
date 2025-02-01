import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

const connectToDb = async () => {

    if(cachedClient && cachedDb){
        return {client: cachedClient, db: cachedDb}
    }

    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pe7mx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    try{
        await client.connect();

        cachedClient = client;
        cachedDb = client.db('e-commerce-next-js');
        console.log("DB connected!")
    }catch(err){
        console.log(JSON.stringify(err))
    }

    return { client, db: client.db('e-commerce-next-js') }
}

export default connectToDb;