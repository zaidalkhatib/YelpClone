import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer uNti5t6cRDi1QcjdzLwOS3U22fzhAQMGvOU497RtIMU001Y7Rc4ZqP966nzOhlY5Fo-JXk7iDEjT30zTR6MLMcpC7biOuJKpZ_HD9JGRwV-AtJ2wDT-oGigositYX3Yx",
  },
});
