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

    app.get('/casework-MS/cases1', function (req, res) {
      res.render('casework-MS/cases1', { 'title' : 'Cases' });
    });

    app.get('/casework-MS/case1', function (req, res) {
      res.render('casework-MS/case1', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
    });

    app.get('/casework-MS/cases2', function (req, res) {
      res.render('casework-MS/cases2', { 'title' : 'Cases' });
    });

    app.get('/casework-MS/case2', function (req, res) {
      res.render('casework-MS/case2', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
    });

    app.get('/casework-MS/task', function (req, res) {
      res.render('casework-MS/task', { 'title' : 'Task' });
    });

  }
};
