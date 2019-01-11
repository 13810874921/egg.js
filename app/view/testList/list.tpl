<html>
  <head>
      <meta charset="utf-8">
    <title>测试列表</title>
  </head>
  <body>
    <a href='/'>跳到第一页</a>
    <h2>{{list.category}}</h2>
    <h3>{{list.author}}</h3>
    <p>{{list.origin}}</p>
    <p>{{list.content}}</p>
    <!-- 数组循环 -->
    {% for item in res %}
    <p>{{item}}</p>
    {% endfor %}
    
  </body>
</html>