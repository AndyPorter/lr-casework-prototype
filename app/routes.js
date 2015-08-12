module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here
    app.get('/index-MS', function (req, res) {
      res.render('index-MS', { 'title' : 'Material Prototype Kit' });
    });

    //Version 1
    app.get('/MS-v1/cases1', function (req, res) {
      res.render('MS-v1/cases1', { 'title' : 'Cases' });
    });

    app.get('/MS-v1/case1', function (req, res) {
      res.render('MS-v1/case1', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
    });

    app.get('/MS-v1/cases2', function (req, res) {
      res.render('MS-v1/cases2', { 'title' : 'Cases' });
    });

    app.get('/MS-v1/case2', function (req, res) {
      res.render('MS-v1/case2', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
    });

    app.get('/MS-v1/task', function (req, res) {
      res.render('MS-v1/task', { 'title' : 'Task' });
    });

    //Version 2
    app.get('/MS-v2/cases1', function (req, res) {
      res.render('MS-v2/cases1', { 'title' : 'Cases' });
    });

    app.get('/MS-v2/case1', function (req, res) {
      res.render('MS-v2/case1', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
    });

    app.get('/MS-v2/cases2', function (req, res) {
      res.render('MS-v2/cases2', { 'title' : 'Cases' });
    });

    app.get('/MS-v2/case2', function (req, res) {
      res.render('MS-v2/case2', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
    });

    app.get('/MS-v2/task1', function (req, res) {
      res.render('MS-v2/task1', { 'title' : 'Task' });
    });

    app.get('/MS-v2/task2', function (req, res) {
      res.render('MS-v2/task2', { 'title' : 'Task' });
    });

    app.get('/MS-v2/case3', function (req, res) {
      res.render('MS-v2/case3', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
    });

    app.get('/MS-v2/case4', function (req, res) {
      res.render('MS-v2/case4', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
    });
  }
};
