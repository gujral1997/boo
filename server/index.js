import express from 'express'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql' 

import schema from './graphql'

const app = express()

mongoose.connect('mongodb://boo:boo1234@ds247223.mlab.com:47223/boo')
const db = mongoose.connection
db.on('error', () => console.log('failed to connect  to databse'))
  .once('open', () => console.log('Connected to db'))
app.get('/',(req, res) => {
    res.send('Hello world, this is graphql api.')
})


// GraphQL API endpoint

app.use('/graphql', graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
})))

app.listen(3000, ()=> {
    console.log('GraphQL API is listening at 3000')
})