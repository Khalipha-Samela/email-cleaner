import { Mail } from "lucide-react";

function Login() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      {/* Left Panel */}
      <div className="hidden lg:flex flex-1 border-r border-zinc-800 p-12 flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">
            Email Cleaner
          </h1>
        </div>

        <div className="max-w-md">
          <h2 className="text-5xl font-semibold leading-tight">
            Clean your inbox without the clutter.
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            Identify newsletters, promotions and
            unnecessary emails before they take over
            your inbox.
          </p>
        </div>

        <div className="text-sm text-zinc-500">
          v0.1 Dashboard Preview
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                <Mail size={18} />
              </div>

              <div>
                <h3 className="font-medium">
                  Email Cleaner
                </h3>

                <p className="text-sm text-zinc-400">
                  Sign in to continue
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                window.location.href = "http://localhost:5000/auth/google";
              }}
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Continue with Gmail
            </button>

            <p className="text-zinc-500 text-sm mt-6 text-center">
              Securely sign in with your Google account. We do not store your password or any sensitive information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
