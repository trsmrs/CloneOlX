import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
mongoose.set('strictQuery', true)
if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {


mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true});
await mongoose.createConnection(MONGODB_URI).asPromise();

return mongoose
}
export default dbConnect