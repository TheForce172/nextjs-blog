// mongodb.js

import 'server-only'
import { MongoClient } from 'mongodb'
const user = process.env.username
const password = process.env.password
//const uri ="mongodb+srv://" + user + ":" + password + "@websitedatabase.uwca7gq.mongodb.net/?retryWrites=true&w=majority"
const uri = `mongodb+srv://${user}:${password}@websitedatabase.uwca7gq.mongodb.net/?retryWrites=true&w=majority`
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
let client
let clientPromise
if (process.env.NODE_ENV === 'development') {
      if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
      }
      clientPromise = global._mongoClientPromise
} else {
      client = new MongoClient(uri, options)
      clientPromise = client.connect()
}
    
export default clientPromise
    