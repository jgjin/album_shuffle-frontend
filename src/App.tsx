import { AlbumCard } from "./components/AlbumCard"
import { useListAlbumListGet } from "./queries/album_shuffle"

export function App() {
  const { data } = useListAlbumListGet({})

  return (
    <div className="grid w-screen h-screen grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-8">
      {data?.data.albums.map((album) => (
        <AlbumCard album={album} />
      ))}
    </div>
  )
}
