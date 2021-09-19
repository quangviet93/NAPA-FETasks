import httpcommon from '../common/httpcommon';


const authservice = {

  register: (user) => {
    return httpcommon.post("/auth/register", user);
  }
}

export default authservice
