var express = require('express');
var router = express.Router();

////////////
// examples
////////////


// router.get('/', function (req, res) {
//   res.render('index');
// });

// router.get('/examples/template-data', function (req, res) {
//   res.render('examples/template-data', { 'name' : 'Foo' });
// });


  // beta stuff

  // beta v1

  // No catchers

  router.get('/:version/applications', function (req, res) {
    var version =  req.params.version;
    res.render(version + '/caselist-01', { 'version' : version });
  });

  router.get('/:version/a000101-draft-register', function(req, res, next) {
    var version =  req.params.version;
    var answer = req.query.radioindentgroup;
    console.log(answer);
    if (answer === 'No') {
      res.redirect('/' + version + '/a000101-completed-old-world', { 'version' : version });
    } else {
      next();
    }
  });

  router.get('/:version/a000101-search-markoff', function(req, res, next) {
    var version =  req.params.version;
    var answer = req.query.radioindentgroup;
    console.log(answer);
    if (answer === 'No') {
      res.redirect('/' + version + '/a000101-completed-old-world', { 'version' : version });
    } else {
      next();
    }
  });


  router.get('/:version/a000101-completed', function(req, res, next) {
    var version =  req.params.version;
    var answer = req.query.radioindentgroup;
    console.log(answer);
    if (answer === 'No') {
      res.redirect('/' + version + '/a000101-completed-old-world-reg-done', { 'version' : version });
    } else {
      next();
    }
  });

    //   app.get('/examples/step1name', function (req, res) {
    //   res.render('examples/step1', { 'name' : 'Bob' });
    // });

    // app.get('/examples/step2', function (req, res) {
    //   if (req.query.knowsni == 'No') {
    //   res.render('examples/step2',
    //       {   'name' : req.query.fullname,
    //         'age' : req.query.age,
    //         'feeling' : req.query.feeling,
    //         'knowsni' : 'doesnt know ni'
    //       });
    //   } else {
    //       res.render('examples/step2',
    //       {   'name' : req.query.fullname,
    //         'age' : req.query.age,
    //         'feeling' : req.query.feeling
    //       });
    //   };
    // });




  // old stuff

  router.get('/', function (req, res) {
    res.render('index');
  });

  router.get('/examples/template-data', function (req, res) {
    res.render('examples/template-data', { 'name' : 'Foo' });
  });

  // add your routes here
  router.get('/index-MS', function (req, res) {
    res.render('index-MS', { 'title' : 'Material Prototype Kit' });
  });

  //Version 1
  router.get('/MS-v1/cases1', function (req, res) {
    res.render('MS-v1/cases1', { 'title' : 'Cases' });
  });

  router.get('/MS-v1/case1', function (req, res) {
    res.render('MS-v1/case1', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });

  router.get('/MS-v1/cases2', function (req, res) {
    res.render('MS-v1/cases2', { 'title' : 'Cases' });
  });

  router.get('/MS-v1/case2', function (req, res) {
    res.render('MS-v1/case2', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });

  router.get('/MS-v1/task', function (req, res) {
    res.render('MS-v1/task', { 'title' : 'Task' });
  });

  //Version 2
  router.get('/MS-v2/cases1', function (req, res) {
    res.render('MS-v2/cases1', { 'title' : 'Cases' });
  });

  router.get('/MS-v2/case1', function (req, res) {
    res.render('MS-v2/case1', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });

  router.get('/MS-v2/cases2', function (req, res) {
    res.render('MS-v2/cases2', { 'title' : 'Cases' });
  });

  router.get('/MS-v2/case2', function (req, res) {
    res.render('MS-v2/case2', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });

  router.get('/MS-v2/task1', function (req, res) {
    res.render('MS-v2/task1', { 'title' : 'Task' });
  });

  router.get('/MS-v2/task2', function (req, res) {
    res.render('MS-v2/task2', { 'title' : 'Task' });
  });

  router.get('/MS-v2/case3', function (req, res) {
    res.render('MS-v2/case3', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });

  router.get('/MS-v2/case4', function (req, res) {
    res.render('MS-v2/case4', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });


  //Version 3
  router.get('/MS-v3/cases1', function (req, res) {
    res.render('MS-v3/cases1', { 'title' : 'Cases' });
  });

  router.get('/MS-v3/case1', function (req, res) {
    res.render('MS-v3/case1', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });

  router.get('/MS-v3/cases2', function (req, res) {
    res.render('MS-v3/cases2', { 'title' : 'Cases' });
  });

  router.get('/MS-v3/case2', function (req, res) {
    res.render('MS-v3/case2', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });

  router.get('/MS-v3/task1', function (req, res) {
    res.render('MS-v3/task1', { 'title' : 'Task' });
  });

  router.get('/MS-v3/task2', function (req, res) {
    res.render('MS-v3/task2', { 'title' : 'Task' });
  });

  router.get('/MS-v3/case3', function (req, res) {
    res.render('MS-v3/case3', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });

  router.get('/MS-v3/case4', function (req, res) {
    res.render('MS-v3/case4', { 'title' : 'Case', 'ref' : 'REF0782', 'type' : 'Mortgage' });
  });



module.exports = router;
