const User = require('../models/users');

exports.getUsers = async (req,res,next) => {
    
    await User.findAll()
    .then(data => {
        res.status(200).json(data);
    })
    .catch((err) => {
        console.log(err);
        //res.status(500).json({error : err});
    })
}

exports.postAddUser = async (req,res,next) => {

    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;

    await User.create({
       
        name : name ,
        phoneNumber : phoneNumber ,
        email : email
    })
    .then((details) => {
        res.json(details);
        
    })
    .catch((err) => { 
        console.log(err);
    });
}

exports.postDeleteUser = async (req,res,next) => {
    try{
        const Id = req.params.id;
        await User.destroy({where : {id : Id}})
        
            res.json(Id);

    }
    catch(err) {
         console.log(err);
    };
}