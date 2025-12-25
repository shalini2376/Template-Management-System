import { useEffect, useState } from "react";
import API from "../api/api";

function Templates() {
    const [templates, setTemplates] = useState([]);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [editingId, setEditingId] = useState(null);

    // fetching templates
    const fetchTemplates = async () => {
        const res = await API.get("/templates");
        setTemplates(res.data);
    };

    useEffect(() => {
        fetchTemplates();
    }, []);

    // creating template
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingId) {
      // UPDATE template
      await API.put(`/templates/${editingId}`, {
        name,
        subject,
        body,
      });
    } else {
      // CREATE template
      await API.post("/templates", {
        name,
        subject,
        body,
      });
    }
    // reset form
    setName("");
    setSubject("");
    setBody("");
    setEditingId(null);

    fetchTemplates();
    };

    const handleEdit = (template) => {
    setName(template.name);
    setSubject(template.subject);
    setBody(template.body);
    setEditingId(template._id);
  };
    return (
        <div className="template-container">
            <h3>Email Templates</h3>
            <form onSubmit={handleSubmit} className="template-form">
                <input
                    placeholder="Template Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br />
                <input
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <br />
                <textarea
                    placeholder="Email Body (use {{name}})"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <br />
                <button type="submit">
                    {editingId ? "Update Template" : "Create Template"}
                </button>
            </form>
            <div className="saved-templates-container">
                {templates.length !== 0 && <h4>Saved Templates</h4>}
                <ul>
                    {templates.map((t) => (
                        <li key={t._id} className="saved-template-list">
                            <p>TemplateName: <strong style={{color: "orange"}}>{t.name}</strong></p>
                            <p>Subject: {t.subject}</p>
                            <button
                                onClick={() => handleEdit(t)}
                            >
                                Edit
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Templates;