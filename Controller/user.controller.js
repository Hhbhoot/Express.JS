const user = require('../public/user.json');

exports.getAllUser = ((req, res) => {
    res.status(201).json(user)
})

exports.getSpecificUser = ((req, res) => {

    let id = Number(req.params.id);
    // console.log(req.params)
    // console.log(id);
    //   console.log(req);


    let item = user.find((p) => p.id === id);
    res.status(200).json(item);

})

exports.addUser = ((req, res) => {

    user.push(req.body);
    // res.json({message : "Data Added" , Data : req.body})
    res.json(user)
})
exports.replaceUser = ((req, res) => {

    const Id = +req.params.id;
    const itemIndex = user.findIndex((p) => p.id === Id);

    user.splice(itemIndex, 1, { ...req.body, id: Id })
    res.status(200).json({ message: "Product Replaced" })

})

exports.updateUser = ((req, res) => {

    let id = +req.params.id;
    let itemIndex = user.findIndex((p) => p.id === id);
    let item = user[itemIndex];
    item = user.splice(itemIndex, 1, { ...item, ...req.body });
    res.json({ message: "Update Succesfull", Data: item })
})

exports.deleteUser = ((req, res) => {

    let id = +req.params.id;
    let itemIndex = user.findIndex((p) => p.id === id);

    let data = user.splice(itemIndex, 1);
    res.json({ message: "Delete Succesfull", Data: data })
})
