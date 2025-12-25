const Contact = require("../models/Contact");

// Adding contacts
exports.createContact = async (req, res) => {
    try{ 
        const { name, email, group} = req.body;
        const contact = await Contact.create({
            name, 
            email,
            group
        });
        res.status(201).json(contact);
    } catch (err) {
        res.status(500).json({message: error. message});
    }
};

// getting all contacts
exports.getContacts = async (req, res) => {
    try{
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// Getting contacts by group 
exports.getContactsByGroup = async (req, res) => {
    try {
        const contacts = await Contact.find({
            group: req.params.group,
        });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}