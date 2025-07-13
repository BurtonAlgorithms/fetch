import { ChatWidget } from "@/components/ChatWidget";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      {/* Fake Navbar */}
      <nav className="bg-slate-900 border-b border-slate-700 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-white font-bold text-xl">YourApp</div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Settings
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Chat Widget in Navbar */}
            <ChatWidget />

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
              <span className="text-white text-sm">John Doe</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-700 rounded-lg p-6 h-32">
            <h3 className="text-white font-semibold mb-2">Card 1</h3>
            <p className="text-slate-300 text-sm">
              Sample content to show context
            </p>
          </div>
          <div className="bg-slate-700 rounded-lg p-6 h-32">
            <h3 className="text-white font-semibold mb-2">Card 2</h3>
            <p className="text-slate-300 text-sm">More sample content</p>
          </div>
          <div className="bg-slate-700 rounded-lg p-6 h-32">
            <h3 className="text-white font-semibold mb-2">Card 3</h3>
            <p className="text-slate-300 text-sm">Even more content</p>
          </div>
        </div>

        {/* Alternative: Chat Widget in Content Area */}
        <div className="mt-8 bg-slate-700 rounded-lg p-6">
          <h2 className="text-white font-semibold mb-4">
            Alternative Position: In Content Area
          </h2>
          <div className="flex justify-end">
            <ChatWidget />
          </div>
        </div>

        {/* Alternative: Chat Widget as Floating Element */}
        <div className="mt-8 bg-slate-700 rounded-lg p-6 relative">
          <h2 className="text-white font-semibold mb-4">
            Alternative Position: Floating
          </h2>
          <p className="text-slate-300 mb-4">
            This shows how the widget might look as a floating element in a
            content area.
          </p>
          <div className="absolute bottom-4 right-4">
            <ChatWidget />
          </div>
          <div className="pb-16">
            <p className="text-slate-300">
              Some content that would be under the floating widget...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
