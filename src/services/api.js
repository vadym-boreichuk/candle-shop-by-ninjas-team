import axios from "axios";

axios.defaults.baseURL = "https://onlinestore-challenge.onrender.com/api";

const END_POINTS = {
  hello: "/",
  getProductById: "/products",
  addProduct: "/products",
};

export const homePage = async () => {
  const res = await axios.get(`${END_POINTS.hello}`);
  return res;
};

export const getAllProducts = async () => {
  const res = await axios.get(`${END_POINTS.getProductById}`);
  return res;
};

export const getProduct = async (id) => {
  const res = await axios.get(`${END_POINTS.getProductById}/${id}`);
  return res;
};

export const addProduct = async (goods) => {
  axios
    .post("/products", {
      goods,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
