import express from 'express'
import cors from 'cors';
import products from './routes/products.js'
import header from './routes/header.js'
import homeProducts from './routes/homeProducts.js'

const app = express()

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Setup static folder
app.use(express.static('assets'))
// app.use(express.static('data'))

//====== Routes ======//

// products Route
app.use('/api/products', products)

// Header Route
app.use('/api', header)

// homeProducts Route
app.use('/api', homeProducts)

app.listen(5000, () => {
    console.log("server runing on port 5000")
})