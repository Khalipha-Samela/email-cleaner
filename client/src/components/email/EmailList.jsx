import EmailRow from "./EmailRow";

function EmailList({ emails, loading, error }) {
  if (loading) {
    return (
      <div className="p-10 text-center text-zinc-400">
        Loading emails...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center text-red-400">
        {error}
      </div>
    );
  }

  if (!emails.length) {
    return (
      <div className="p-10 text-center text-zinc-500">
        No emails found.
      </div>
    );
  }

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900">
      <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-zinc-800 text-xs uppercase tracking-wide text-zinc-500">
        <div className="col-span-3">Sender</div>
        <div className="col-span-4">Subject</div>
        <div className="col-span-3">Preview</div>
        <div className="col-span-2 text-right">Label</div>
      </div>

      {emails.map((email) => (
        <EmailRow
          key={email.id}
          email={email}
        />
      ))}
    </div>
  );
}

export default EmailList;