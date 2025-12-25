import { AlbumCard } from "./components/AlbumCard"
import { useListAlbumsAlbumListGet as useListAlbums } from "./queries/album_shuffle"

export function App() {
  const { data, error } = useListAlbums({
    query: {
      staleTime: Infinity,
    },
  })

  if (error?.status === 401) {
    window.location.href = import.meta.env.VITE_BACKEND_URL
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-8 min-h-screen bg-white dark:bg-gray-800">
      {data?.data.albums.map((album) => (
        <AlbumCard album={album} key={album.album_url} />
      ))}
    </div>
  )
}
