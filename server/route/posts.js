import express from "express"
import{getPosts , createPosts, updatePost} from "../controllers/posts.js"

const router = express.Router()
// when someone visit and read
router.get("/", getPosts )
//when insert data
router.post("/", createPosts )

router.patch("/:id", updatePost)

export default router 