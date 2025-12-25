const EmailTemplate = require("../models/EmailTemplate");
const Contact = require("../models/Contact");
const { sendEmail, sendBulkEmails  } = require("../services/emailService");

exports.sendTestEmail = async (req, res) => {
  try {
    const { to } = req.body;

    await sendEmail({
      to,
      subject: "Test Email from Email Template System",
      text: "This is a test email sent using SendGrid integration.",
    });

    res.json({ message: "Test email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sendBulkEmails = async (req, res) => {
    try {
        const {templateId, group} = req.body;

        // 1. get template
        const template = await EmailTemplate.findById(templateId);
        if (!template) {
            res.status(404).json({message: "Template not found"});
        }

        // 2. Get contacts by group
        const contacts = await Contact.find({group});
        if (contacts.length === 0){
            return res.status(404).json({message: "No contacts found in this group"});
        }
        
        // 3. Send bulk emails
        await sendBulkEmails({
            contacts,
            subject: template.subject,
            body: template.body,
        });
        res.json({message: "Bulk emails sent successfully"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
