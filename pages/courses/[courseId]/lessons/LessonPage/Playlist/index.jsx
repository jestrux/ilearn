const PlaylistItem = () => {
    return (
        <button className="w-full flex items-center p-3 hover:bg-gray-50">
            <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
                <svg className="text-gray-400 w-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.25 12L5.75 5.75V18.25L18.25 12Z"></path>
                </svg>
            </div>

            <div className="ml-2.5 flex-1" style={{minWidth: 0}}>
                <h3 className="text-sm text-gray-500 leading-none truncate">
                    Getting started with the jammy jams is my actual jam
                </h3>
            </div>

            <span className="ml-3 text-xs opacity-50">
                17:08
            </span>
        </button>
    );
}

const Playlist = () => {
    return (
        <div className="py-1 max-h-full flex flex-col">
            <h3 className="text-lg font-medium opacity-60 mb-2.5">
                Making a pizza in 20 minutes
            </h3>
            <div className="flex-1 overflow-y-auto border divide-y rounded">
                <PlaylistItem />
                <PlaylistItem />
            </div>
        </div>
    );
}

export default Playlist;