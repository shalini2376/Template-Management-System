import { useEffect, useState } from "react";
import API from "../api/api";

function SendEmail() {
  const [templates, setTemplates] = useState([]);
  const [templateId, setTemplateId] = useState("");
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");

  // fetching templates
  const fetchTemplates = async () => {
    const res = await API.get("/templates");
    setTemplates(res.data);
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  const handleSend = async () => {
    try {
      await API.post("/email/send-bulk", {
        templateId,
        group,
      });

      setMessage("Bulk emails sent successfully 🎉");
      setGroup("");
      setTemplateId("");
    } catch (error) {
      setMessage("Failed to send emails");
    }
  };

  return (
    <div>
      <h3>Send Bulk Email</h3>

      <select
        value={templateId}
        onChange={(e) => setTemplateId(e.target.value)}
        required
      >
        <option value="">Select Template</option>
        {templates.map((t) => (
          <option key={t._id} value={t._id}>
            {t.name}
          </option>
        ))}
      </select>

      <br />

      <input
        placeholder="Group name (e.g. Candidates)"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        required
      />

      <br />

      <button onClick={handleSend} disabled={!templateId || !group}>
        Send Bulk Email
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default SendEmail;
