var posts=["2025/10/05/Python Bottle SSTI注入/","2025/10/05/N1CTF Junior 2025 2_2/","2025/09/25/IMJATOPOS/","2025/10/05/文件上传/","2025/10/05/python 内存马/","2025/09/25/hello-world/","2025/10/05/海口风景/","2025/10/05/转专业/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };