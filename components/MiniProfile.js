export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img className="h-16 rounded-full border p-[2px]" src="https://avatars.githubusercontent.com/u/70996469?v=4" alt="user-image"></img>
        <div className="flex-1 ml-4">
            <h2 className="font-bold">codewithaso</h2>
            <h3 className="text-sm text-gray-500">Welcome to instagram</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm">Sing out</button>
    </div>
  )
}
