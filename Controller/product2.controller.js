const Product = require("../model/product.model")

exports.createProduct = async (req, res) => {

    try {

        const { title, discription, price, brand, category } = req.body;

        let product = await Product.findOne({ title: title });
        if (product) {
            res.json({ message: "Product Already Exists.." })
        }
        product = await Product.create({title, discription, price, brand, category  });
        product.save();
        res.status(201).json({ message: "Product Added..", ProductData: product })
    } catch (err) {
        console.log(err);
        res.json({ message: "Internal Server Error.." })
    }

}

exports.getAllProduct = async (req, res) => {

    try {
        let product = await Product.find({ isDelete: false });
        res.json(product);


    } catch (err) {
        console.log(err);
        res.json({ message: "Internal Server Error.." })
    }

}

exports.getSpecificProduct = async (req, res) => {

    try {
        let id = req.params.id;
        let product = await Product.findById(id, { isDelete: false });
        // product.save();

        res.json({ ProductData: product })
    } catch (err) {
        console.log(err);
        res.json({ message: "Internal Server Error.." })
    }

}

exports.updateProduct = async (req, res) => {

    try {
        let id = req.params.id;
        let product = await Product.findById(id, { isDelete: false });
        if (!product) {
            res.json({ message: "Product Not Found" });
        }
        product = await Product.findByIdAndUpdate({ _id: id }, {

            $set: { ...req.body }
        },
            {
                new: true
            })
        product.save();
        res.json({ message: "Product Updated", product })

    }
    catch (err) {
        console.log(err);
        res.json({ message: "Internal Server Error.." })
    }
}

// exports.deleteProduct = async (req,res)=>{
//     try{
//         let id = req.params.id ;
//         let product = await Product.findById(id);
//         if(!product){
//             res.json({ message : "Product Not Found.."})
//         }
//         product = await Product.findOneAndDelete({ _id : id})
//         res.json({ message : "Product Deleted...",product})
//     }
//     catch(err){
//         console.log(err);
//         res.json({ message : "Internal Server Error..."})
//     }
// }

// Soft Delete

exports.deleteProduct = (async (req, res) => {
    try {
        let id = req.params.id;

        let product = await Product.findById(id);
        if (!product) {
            res.json({ message: " Product Not Found..." })
        }
        product = await Product.findByIdAndUpdate(product._id, { isDelete: true }, { new: true })
        res.json({ message: "Product Deleted.." })

    }
    catch (err) {
        console.log(err);
        res.json({ message: " Internal Server Eroor...... " })
    }
})