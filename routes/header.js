import express from 'express'
const router = express.Router()
import header from '../data/header.json' assert { type: "json" };

// Get all men
router.get('/men', (req, res) => {
    const limit = req.query.limit
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(header.men.slice(0, limit))
    }
    res.status(200).json(header.men)
})

// Get all women
router.get('/women', (req, res) => {
    const limit = req.query.limit
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(header.women.slice(0, limit))
    }
    res.status(200).json(header.women)
})

// Get all kids
router.get('/kids', (req, res) => {
    const limit = req.query.limit
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(header.kids.slice(0, limit))
    }
    res.status(200).json(header.kids)
})

// Get all slides
router.get('/slides', (req, res) => {
    const limit = req.query.limit
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(header.slides.slice(0, limit))
    }
    res.status(200).json(header.slides)
})

// Get all products in summer collection category slide
router.get('/summerCollection', (req, res) => {
    console.log("summer url", req.originalUrl)
    const limit = req.query.limit
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(header.summerCollection.slice(0, limit))
    }
    res.status(200).json(header.summerCollection)
    
})

// Get all products in winter clearance category slide
router.get('/winterClearance', (req, res) => {
    console.log("winter url", req.originalUrl)
    const limit = req.query.limit
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(header.winterClearance.slice(0, limit))
    }
    res.status(200).json(header.winterClearance)
    
})

// Get all headerFeatures
router.get('/headerFeatures', (req, res) => {
    const limit = req.query.limit
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(header.headerFeatures.slice(0, limit))
    }
    res.status(200).json(header.headerFeatures)
})









// Get single post
// router.get('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const post = header.find((post) => post.id === id)
//     if (!post) {
//         return res.status(404).json({ msg: `A post with id ${id} was not found` })
//     }
//     res.status(200).json(post)
// })

// Create new post
// router.post('/', (req, res) => {
//     const newPost = {
//         id: header.length + 1,
//         title: req.body.title
//     }

//     if (!newPost.title) {
//         return res.status(404).json({ msg: "Please include a title" })
//     }

//     header.push(newPost)
//     res.status(201).json(header)
// })

// Update post
// router.put('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const post = header.find((post) => post.id === id)
//     if (!post) {
//         return res
//             .status(404)
//             .json({ msg: `A post with id ${id} was not found` })
//     }

//     post.title = req.body.title
//     res.status(200).json(header)
// })

// Delete post
// router.delete('/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const post = header.find((post) => post.id === id)
//     if (!post) {
//         return res
//             .status(404)
//             .json({ msg: `A post with id ${id} was not found` })
//     }

//     header = header.filter((post) => post.id !== id)
//     res.status(200).json(header)
// })


export default router;