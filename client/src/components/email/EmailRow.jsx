import EmailBadge from "./EmailBadge";

function EmailRow({ email }) {
  return (
    <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-zinc-800 hover:bg-zinc-900 transition">
      <div className="col-span-3 font-medium truncate">
        {email.from}
      </div>

      <div className="col-span-4 truncate text-zinc-300">
        {email.subject}
      </div>

      <div className="col-span-3 truncate text-zinc-500">
        {email.snippet}
      </div>

      <div className="col-span-2 flex justify-end">
        <EmailBadge label="Inbox" />
      </div>
    </div>
  );
}

export default EmailRow;