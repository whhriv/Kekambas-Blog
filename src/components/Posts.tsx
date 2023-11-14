
import Post from "./Post"
export default function Posts() {

    const posts = [
        {
            id: 1,
            body: "I'm missing kekambus",
            author: {
                user_id: 1,
                username: 'brians'
            }
        },
   
    {
        id: 2,
        body: "Killer job on that whiteboard",
        author: {
            user_id:  2,
            username: 'sarahs'
        }
    },

{
    id: 3,
    body: "isn't React fun", 
    author: {
        user_id: 3,
        username: "dylans"
    }
}
]

  return (
    <>
    <h2>Posts</h2>
    { posts.map( () => <Post post={post} /> ) }
    </>
  )
}
