export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Spotlight
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your modern web application is ready to go!
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Project Structure
            </h2>
            <div className="text-left space-y-2 text-gray-600">
              <p>✅ Frontend with Next.js 14 and TypeScript</p>
              <p>✅ Backend with Express.js and Node.js</p>
              <p>✅ Tailwind CSS for styling</p>
              <p>✅ Organized folder structure</p>
              <p>✅ Ready for development</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}