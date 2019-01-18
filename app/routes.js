const { Student } = require("./models/Student");
const md5 = require("md5");
module.exports = function(app, streams) {

  // GET home 
  var index = function(req, res) {
    res.render('index', { 
                          title: 'Project RTC', 
                          header: 'WebRTC live streaming',
                          username: 'Username',
                          share: 'Share this link',
                          footer: 'pierre@chabardes.net',
                          id: req.params.id
                        });
  };

  // GET streams as JSON
  var displayStreams = function(req, res) {
    var streamList = streams.getStreams();
    // JSON exploit to clone streamList.public
    var data = (JSON.parse(JSON.stringify(streamList))); 

    res.status(200).json(data);
  };

  app.get('/student/api/:id', async (req, res) => {
    const student = await Student.query().findById(req.params.id);
    res.json(student);
  });
  app.post('/account/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const student = await Student.query().findOne({
        username
      });
      if (student) {
        if (student.password == md5(password)) {
          res.json(student);
        } else {
          res.status(404).json({error: "Password salah"});
        }
      }
      res.status(404).json({error: "Username tidak ditemukan."});
    } catch (error) {
      res.status(500).json({error});
    }
  });
  app.get('/streams.json', displayStreams);
  app.get('/', index);
  app.get('/:id', index);
}