export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log("Making request to " + config.url);
  });
  $axios.onResponse(config => {
    console.log("Making response to " + config.url);
  });
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status, 10);
    if (code === 400) {
      redirect("/400");
    }
  });
}
