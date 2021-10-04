const Temperature = require('../models/tempModels');

exports.getIndex = (req,res) => {
   Temperature.find()
        .then((tempDatas) => {
            res.render('index', {
                pageTitle : 'Temperature List',
                tempData : tempDatas
            })
        })      //[{_id,tempDegree},{},{}]
        .catch(err => {
            consolse.log(err);
        })
}

exports.getAddTemp = (req,res) => {
    res.render("add-temp", {
        pageTitle:"Add Temperature",
        editing : false
    }); 
}

exports.postAddTemp = (req,res) => {
    const tempDegree = req.body.tempDegree;
    const  temp = new Temperature({tempDegree: tempDegree});
    temp.save()
        .then(() => {
            console.log("Temperature Create");
            res.redirect('/add-temp');
        })
        .catch(err => {
            console.log(err);
        })
    }

exports.getEditTemp = (req,res) => {
    const tempId = req.params.tempId;
    const editMode = req.query.edit;

    Temperature.findById(tempId)
        .then(temp => {
            res.render('add-temp',{
                temp : temp,
                pageTitle : 'Edit Temperature',
                editing : editMode
            })
        })
        .catch(err => {
            console.log(err);
        })
}

exports.postEditTemp = (req,res) => {
    const tempId = req.body.tempId;
    const updateTemp = req.body.tempDegree;

    Temperature.findById(tempId)
        .then(temp => {
            temp.tempDegree = updateTemp;
            temp.save()
                .then(() => {
                    console.log("Update");
                    res.redirect('/')
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
}

exports.postDeleteTemp = (req,res) => {
    const tempId = req.body.tempId;
    Temperature.findByIdAndRemove(tempId)
        .then(() => {
            console.log("Delete");
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        })
}