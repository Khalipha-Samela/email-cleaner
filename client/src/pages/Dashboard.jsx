import {
  LayoutDashboard,
  Inbox,
  Filter,
  BarChart3,
  Settings,
  Search,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const stats = [
    {
      title: "Total Emails",
      value: "3,421",
    },
    {
      title: "Newsletters",
      value: "198",
    },
    {
      title: "Promotions",
      value: "412",
    },
    {
      title: "Storage Saved",
      value: "1.2 GB",
    },
  ];

  const emails = [
    {
      sender: "LinkedIn",
      subject: "New jobs matching your profile",
      type: "Promotion",
    },
    {
      sender: "Takealot",
      subject: "Weekend deals are live",
      type: "Newsletter",
    },
    {
      sender: "GitHub",
      subject: "Pull request awaiting review",
      type: "Important",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen border-r border-zinc-800 bg-zinc-950 sticky top-0">
          <div className="p-6 border-b border-zinc-800">
            <h1 className="text-lg font-semibold">
              Email Cleaner
            </h1>

            <p className="text-sm text-zinc-500 mt-1">
              Inbox management
            </p>
          </div>

          <nav className="p-3 space-y-1">
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
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Navigation */}
          <header className="h-16 border-b border-zinc-800 px-8 flex items-center justify-between">
            <div>
              <h2 className="font-medium">
                Inbox Overview
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900">
                <Search size={16} className="text-zinc-500" />

                <input
                  type="text"
                  placeholder="Search emails..."
                  className="bg-transparent outline-none text-sm placeholder:text-zinc-500"
                />
              </div>

              {/* Connect Gmail */}
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
                Connect Gmail
              </button>

              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-medium">
                KS
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          </header>

          {/* Content */}
          <div className="p-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="border border-zinc-800 bg-zinc-900 rounded-xl p-5"
                >
                  <p className="text-sm text-zinc-400">
                    {item.title}
                  </p>

                  <h3 className="text-3xl font-semibold mt-2">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>

            {/* Cleanup Opportunities */}
            <div className="mt-8 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900">
                <h3 className="font-medium">
                  Cleanup Opportunities
                </h3>

                <p className="text-sm text-zinc-500 mt-1">
                  Emails identified for review.
                </p>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800 text-left text-sm text-zinc-500">
                    <th className="px-6 py-4 font-medium">
                      Sender
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Subject
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Type
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {emails.map((email, index) => (
                    <tr
                      key={index}
                      className="border-b border-zinc-900 hover:bg-zinc-900 transition"
                    >
                      <td className="px-6 py-4">
                        {email.sender}
                      </td>

                      <td className="px-6 py-4 text-zinc-400">
                        {email.subject}
                      </td>

                      <td className="px-6 py-4">
                        <span className="text-sm border border-zinc-700 px-2 py-1 rounded-md">
                          {email.type}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <button className="border border-zinc-700 px-3 py-1.5 rounded-lg text-sm hover:bg-zinc-800 transition">
                          Review
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            <div className="mt-8 border border-zinc-800 rounded-xl p-12 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <Mail size={22} />
              </div>

              <h3 className="text-lg font-medium mt-5">
                Connect your inbox
              </h3>

              <p className="text-zinc-400 mt-2 max-w-md mx-auto">
                Connect Gmail to start analyzing newsletters,
                promotions, receipts and other unnecessary
                emails.
              </p>

              <button className="mt-6 bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition">
                Connect Gmail
              </button>
            </div>
          </div>
        </main>
      </div>
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
      {text}
    </button>
  );
}

export default Dashboard;