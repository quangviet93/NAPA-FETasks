import httpcommon from '../common/httpcommon';


const postservice = {

  findAll: () => {
    return httpcommon.get("/post");
  },
  createPost: (post) => {
    return httpcommon.post("/post/create", post);
  },
  deletePost: (idPost) => {
    return httpcommon.delete("/post/" + idPost);
  }
}

export default postservice