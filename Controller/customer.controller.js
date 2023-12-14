const Customer = require("../model/customer.model")

exports.createCustomer = async (req, res) => {

    try {

        const { Name, Description, Mobile, Number, City } = req.body;

        let customer = await Customer.findOne({ Name: Name });
        if (customer) {
            res.json({ message: "Customer Already Exists.." })
        }
        customer = await Customer.create({ ...req.body });
        customer.save();
        res.status(201).json({ message: "Customer Added..", CustomerData: customer })
    } catch (err) {
        console.log(err);
        res.json({ message: "Internal Server Error.." })
    }

}

exports.getAllCustomer = async (req, res) => {

    try {
        let customer = await Customer.find({ isDelete: false });
        res.json(customer);


    } catch (err) {
        console.log(err);
        res.json({ message: "Internal Server Error.." })
    }

}

exports.getSpecificCustomer = async (req, res) => {

    try {
        let id = req.params.id;
        let customer = await Customer.findById(id, { isDelete: false });
        // customer.save();

        res.json({ CustomerData: customer })
    } catch (err) {
        console.log(err);
        res.json({ message: "Internal Server Error.." })
    }

}

exports.updateCustomer = async (req, res) => {

    try {
        let id = req.params.id;
        let customer = await Customer.findById(id, { isDelete: false });
        if (!customer) {
            res.json({ message: "Product Not Found" });
        }
        customer = await Customer.findByIdAndUpdate({ _id: id }, {

            $set: { ...req.body }
        },
            {
                new: true
            })
        customer.save();
        res.json({ message: "product Updated", customer })

    }
    catch (err) {
        console.log(err);
        res.json({ message: "Internal Server Error.." })
    }
}

// exports.deleteCustomer = async (req,res)=>{
//     try{
//         let id = req.params.id ;
//         let customer = await Customer.findById(id);
//         if(!customer){
//             res.json({ message : "Customer Not Found.."})
//         }
//         customer = await Customer.findOneAndDelete({ _id : id})
//         res.json({ message : "Customer Deleted...",customer})
//     }
//     catch(err){
//         console.log(err);
//         res.json({ message : "Internal Server Error..."})
//     }
// }

// Soft Delete

exports.deleteCustomer = (async (req, res) => {
    try {
        let id = req.params.id;

        let customer = await Customer.findById(id);
        if (!customer) {
            res.json({ message: " Customer Not Found..." })
        }
        customer = await Customer.findByIdAndUpdate(customer._id, { isDelete: true }, { new: true })
        res.json({ message: "Customer Deleted.." })

    }
    catch (err) {
        console.log(err);
        res.json({ message: " Internal Server Eroor...... " })
    }
})