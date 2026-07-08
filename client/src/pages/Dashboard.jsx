import {
  LayoutDashboard,
  Inbox,
  Filter,
  BarChart3,
  Settings,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import useEmails from "../hooks/useEmails";
import EmailList from "../components/email/EmailList";

function Dashboard() {
  const navigate = useNavigate();

  const { emails, loading, error } = useEmails();

  const stats = [
    {
      title: "Total Emails",
      value: emails.length,
    },
    {
      title: "Unread",
      value: emails.filter((email) =>
        email.labelIds?.includes("UNREAD")
      ).length,
    },
    {
      title: "Important",
      value: emails.filter((email) =>
        email.labelIds?.includes("IMPORTANT")
      ).length,
    },
    {
      title: "Inbox",
      value: emails.filter((email) =>
        email.labelIds?.includes("INBOX")
      ).length,
    },
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800">
          <h1 className="text-lg font-semibold">
            Email Cleaner
          </h1>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            text="Dashboard"
            active
          />

          <SidebarItem
            icon={<Inbox size={18} />}
            text="Inbox"
          />

          <SidebarItem
            icon={<Filter size={18} />}
            text="Cleanup Rules"
          />

          <SidebarItem
            icon={<BarChart3 size={18} />}
            text="Analytics"
          />

          <SidebarItem
            icon={<Settings size={18} />}
            text="Settings"
          />
        </nav>

        <div className="border-t border-zinc-800 p-4">
          <button
            onClick={handleLogout}
            className="w-full rounded-lg border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-900 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8">
          <div>
            <h2 className="text-xl font-semibold">
              Inbox Overview
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-zinc-800 rounded-lg px-3 py-2 bg-zinc-900">
              <Search
                size={16}
                className="text-zinc-500"
              />

              <input
                placeholder="Search emails..."
                className="bg-transparent outline-none text-sm w-64 placeholder:text-zinc-500"
              />
            </div>

            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
              Sync Inbox
            </button>

            <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center font-medium">
              KS
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
              >
                <p className="text-sm text-zinc-500">
                  {stat.title}
                </p>

                <h3 className="text-3xl font-semibold mt-2">
                  {loading ? "--" : stat.value}
                </h3>
              </div>
            ))}
          </div>

          {/* Inbox */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">
                  Inbox
                </h3>

                <p className="text-zinc-500 text-sm mt-1">
                  Showing your latest Gmail messages.
                </p>
              </div>

              <button
                className="border border-zinc-700 rounded-lg px-4 py-2 text-sm hover:bg-zinc-900"
                onClick={() => window.location.reload()}
              >
                Refresh
              </button>
            </div>

            <EmailList
              emails={emails}
              loading={loading}
              error={error}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, text, active = false }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
        active
          ? "bg-zinc-800 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default Dashboard;

