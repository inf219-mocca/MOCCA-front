const apiURL = () => {
  let url;
  if (process.env.NODE_ENV !== "production") {
    url = "http://localhost:8000";
  } else {
    url = "http://10.111.41.188:8000";
  }

  return url;
};

export default apiURL;
