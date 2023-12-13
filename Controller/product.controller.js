
const Product = require('../public/product.json')


exports.getAllProduct = ((req, res) => {
    res.status(201).json(Product)
})

exports.getSpecificProduct = ((req, res) => {

    let id = Number(req.params.id);
    // console.log(req.params)
    // console.log(id);
    //   console.log(req);


    let item = Product.find((p) => p.id === id);
    res.status(200).json(item);

})

exports.addProduct = ((req, res) => {

    Product.push(req.body);
    // res.json({message : "Data Added" , Data : req.body})
    res.json(Product)
})
exports.replaceProduct = ((req, res) => {

    const Id = +req.params.id;
    const itemIndex = Product.findIndex((p) => p.id === Id);

    Product.splice(itemIndex, 1, { ...req.body, id: Id })
    res.status(200).json({ message: "Product Replaced" })

})

exports.updateProduct = ((req, res) => {

    let id = +req.params.id;
    let itemIndex = Product.findIndex((p) => p.id === id);
    let item = product[itemIndex];
    item = Product.splice(itemIndex, 1, { ...item, ...req.body });
    res.json({ message: "Update Succesfull", Data: item })
})

exports.deleteProduct = ((req, res) => {

    let id = req.params.id;
    let itemIndex = Product.findIndex((p) => p.id === id);

    let data = Product.splice(itemIndex, 1);
    res.json({ message: "Delete Succesfull", Data: data })
})



