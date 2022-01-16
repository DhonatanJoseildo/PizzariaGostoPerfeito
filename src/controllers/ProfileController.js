const Profile = require('../model/Profile')

module.exports = {
  async save(req, res){
    if (req.body["password"] == req.body["confirmPassword"]) {
      
      await Profile.create(
        {
          email: req.body["email"],
          password: req.body["password"],
          endereco: req.body["endereco"],
          numberEndereco: req.body["numberEndereco"]
        }
      );
    }else{

      return res.render('registerProfile',{message:'Passwords não confere!'})
    }

    return res.redirect('/home')
  },

  async enter(req, res){
    const profiles = await Profile.get()

    const profileEmail = req.body.email
    const profilePwd = req.body.password

    const newprofile = profiles.find(profile => (profile.email === profileEmail) && (profile.password === profilePwd));

    if (!newprofile) {

     return res.send('Email ou senha incorretas!')
    }

    return res.render('home', {profile: newprofile})
  }
}