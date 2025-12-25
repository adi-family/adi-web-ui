import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <h1 className="text-5xl font-bold text-white mb-6 text-center">
            ADI Web UI
          </h1>

          <p className="text-violet-200 text-center mb-8">
            A simple React TypeScript + Tailwind CSS application
          </p>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Count is {count}
            </button>

            <p className="text-violet-300 text-sm">
              Click the button to test interactivity
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
