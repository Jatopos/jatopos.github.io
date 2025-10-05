var posts=["2025/09/25/IMJATOPOS/","2025/10/05/文件上传/","2025/09/25/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };