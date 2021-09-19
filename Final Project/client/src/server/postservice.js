import httpcommon from '../common/httpcommon';


const postservice = {

  get: () => {
    return httpcommon.get("/post");
  }
}

export default postservice