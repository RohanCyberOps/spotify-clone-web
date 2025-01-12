import React from 'react';
import { Home, Search, Library, Heart, Plus, MoreHorizontal, Play, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Mic2, ListMusic, Maximize2 } from 'lucide-react';

function App() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-black p-6 flex flex-col gap-6">
          <nav className="space-y-4">
            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
              <Home size={24} />
              <span className="font-semibold">Home</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
              <Search size={24} />
              <span className="font-semibold">Search</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white transition">
              <Library size={24} />
              <span className="font-semibold">Your Library</span>
            </a>
          </nav>

          <div className="mt-6">
            <div className="space-y-4">
              <button className="flex items-center gap-4 text-gray-300 hover:text-white transition">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Plus size={20} />
                </div>
                <span className="font-semibold">Create Playlist</span>
              </button>
              <button className="flex items-center gap-4 text-gray-300 hover:text-white transition">
                <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg">
                  <Heart size={20} />
                </div>
                <span className="font-semibold">Liked Songs</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="mt-6 space-y-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <a key={i} href="#" className="block py-2 text-gray-300 hover:text-white transition">
                  Playlist {i + 1}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-y-auto p-8">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Good evening</h1>
            <button className="p-2 rounded-full hover:bg-black/20">
              <MoreHorizontal size={24} />
            </button>
          </header>

          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition group">
                <div className="relative">
                  <img
                    src={`https://source.unsplash.com/random/300x300?music&sig=${i}`}
                    alt="Album cover"
                    className="w-full aspect-square object-cover rounded-md mb-4"
                  />
                  <button className="absolute bottom-4 right-4 p-3 bg-green-500 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                    <Play size={24} fill="black" className="text-black ml-1" />
                  </button>
                </div>
                <h3 className="font-semibold mb-1">Top Mix {i + 1}</h3>
                <p className="text-sm text-gray-400">Various Artists</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Player */}
      <footer className="h-24 bg-black border-t border-gray-800 px-4">
        <div className="flex items-center justify-between h-full">
          {/* Currently Playing */}
          <div className="flex items-center gap-4 w-1/3">
            <img
              src="https://source.unsplash.com/random/56x56?album"
              alt="Current track"
              className="w-14 h-14 rounded"
            />
            <div>
              <h4 className="text-sm font-semibold">Current Track</h4>
              <p className="text-xs text-gray-400">Artist Name</p>
            </div>
            <Heart size={20} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center w-1/3">
            <div className="flex items-center gap-6 mb-2">
              <Shuffle size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <SkipBack size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <button className="p-2 bg-white rounded-full hover:scale-105 transition">
                <Play size={20} className="text-black ml-0.5" />
              </button>
              <SkipForward size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Repeat size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="text-xs text-gray-400">0:00</span>
              <div className="h-1 flex-1 bg-gray-800 rounded-full">
                <div className="h-1 w-1/3 bg-white rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">3:45</span>
            </div>
          </div>

          {/* Volume Controls */}
          <div className="flex items-center gap-4 w-1/3 justify-end">
            <Mic2 size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <ListMusic size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <Volume2 size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <div className="w-24 h-1 bg-gray-800 rounded-full">
              <div className="h-1 w-1/2 bg-white rounded-full"></div>
            </div>
            <Maximize2 size={20} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;