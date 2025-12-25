const EmailTemplate = require("../models/EmailTemplate");

// creating new template
exports.createTemplate = async (req, res) => {
    try{
        const {name, subject, body} = req.body;

        const template = await EmailTemplate.create({
            name, 
            subject,
            body,
        });
        res.status(201).json(template);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// Getting all templates
exports.getTemplates = async (req, res) => {
    try{
        const templates = await EmailTemplate.find();
        res.json(templates);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// Updating Templates
exports.updateTemplate = async (req, res) => {
    try{
        const { id } = req.params;
        const updateTemplate = await EmailTemplate.findByIdAndUpdate(
            id,
            req.body,
            {new: true, runValidators: true}
        );
        if (!updateTemplate) {
            return res.status(404).json({ message: "Template not found" });
        }
        res.json(updateTemplate);
    } catch (err) {
        console.error("Update template error:", error);
        res.status(500).json({message: err.message});
    }
};