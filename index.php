<html>
<head>
  <link rel="stylesheet" href="/css/index.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/js/filter-func.js"></script>
  <script type="text/javascript" src="/js/load-data.js"></script>

  <title>List filter app</title>
  <meta charset="UTF-8">
  <meta name="description" content="List Filtering web app for North Western Mutual Evaluation">
  <meta name="author" content="Minh Nguyen">
</head>
<body>
<div id="sort-list-app">
  <div class="row">
    <div class="col-sm-6 col-md-6 col-xl-6">
      <h1 class= "app_title">List Filter App</h1>
      <h5 class= "app_title_sub"> Quick filter certain list</h5>
      <div class= "app_description" id="public-api-list">
        <h3>Public api List</h3>
        <h6>Test connection to public api</h6>
        <p>Get data from public api.
          See the api over <a href="https://dog.ceo/api/breeds/list">here</a>
        </p>
        <button class="get_list_btn">Get List</button>
      </div>

      <div class= "app_description" id="private-api-list">
        <h3>Private api List</h3>
        <h6>Test connection to local api</h6>
        <p>Get data from api made by author.
          Not working if you don't create a local sql database first.
        </p>
        <button class="get_list_btn">Get List</button>
      </div>
    </div>

    <div class="col-sm-6 col-md-6 col-xl-6">
      <input type="text" class="filter" onkeyup="filter_list()"
          placeholder="Search here..">
      <ul class="filter-list"></ul>
    </div>
  </div>
</div>
</body>
</html>
