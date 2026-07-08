import { useEffect, useState } from "react";
import { fetchEmails } from "../services/gmail";

export default function useEmails() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadEmails();
  }, []);

  async function loadEmails() {
    try {
      setLoading(true);

      const data = await fetchEmails();

      setEmails(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load emails.");
    } finally {
      setLoading(false);
    }
  }

  return {
    emails,
    loading,
    error,
    refresh: loadEmails,
  };
}