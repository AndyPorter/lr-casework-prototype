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
      res.render('index-MS', { 'title' : 'Matts Land Registry Prototype Kit' });
    });

  }
};
