import express from 'express'
const router = express.Router()
import { readFile } from 'node:fs';

// Get all products
router.get('/', (req, res) => { getAllItems(req, './data/products.json', res, 'products') })

// Get single product
router.get('/:id', (req, res) => { getSingleItem(req, './data/products.json', res, 'products') })

// Create new product
// router.post('/', (req, res) => {
//     const newproduct = {
//         id: products.length + 1,
//         title: req.body.title
//     }

//     if (!newproduct.title) {
//         return res.status(404).json({ msg: "Please include a title" })
//     }

//     products.push(newproduct)
//     res.status(201).json(products)
// })

// Update product
// router.put('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const product = products.find((product) => product.id === id)
//     if (!product) {
//         return res
//             .status(404)
//             .json({ msg: `A product with id ${id} was not found` })
//     }

//     product.title = req.body.title
//     res.status(200).json(products)
// })

// Delete product
// router.delete('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const product = products.find((product) => product.id === id)
//     if (!product) {
//         return res
//             .status(404)
//             .json({ msg: `A product with id ${id} was not found` })
//     }

//     products = products.filter((product) => product.id !== id)
//     res.status(200).json(products)
// })


const getAllItems = (req, file, res, list) => {
    const limit = parseInt(req.query.limit)
    // console.log(req.originalUrl)
    let products = []
    readFile(file, (err, data) => {
        if (!err) {
            products = JSON.parse(data.toString())
            if (!isNaN(limit) && limit > 0) {
                return res.status(200).json(products[list].slice(0, limit))
            }
            res.status(200).json(products[list])
        }
        // console.log('error is: ', err)
    })
}

const getSingleItem = (req, file, res, list) => {
    const id = parseInt(req.params.id)
    let products = []
    // console.log(req.originalUrl)
    readFile(file, (err, data) => {
        if (!err) {
            products = JSON.parse(data.toString())
            const product = products[list].find((product) => product.id == id)
            if (!product) {
                return res
                    .status(404)
                    .json({ msg: `A product with id ${id} was not found` })
            }
            res.status(200).json(product)
        }
        // console.log('error is: ', err)
    })
}


export default router;