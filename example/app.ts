import App from "../index";

new App()
  .use('logger')
  .use('静态文件')
  .start({
    cluster: 4
  })
  .then(function(ctx){

  })
  .catch(function(err) {
    console.error(err);
  });
