import { useState } from "react"

import { type Album } from "../models/album"

type Props = {
  album: Album
}
export function AlbumCard({ album }: Props) {
  const [albumImageLoaded, setAlbumImageLoaded] = useState(false)

  const { image_url: imageUrl, name, artist } = album
  const albumImageDimensions = {
    width: 300,
    height: 300,
  }
  return (
    <div className="flex flex-col items-center p-4">
      <div style={albumImageDimensions} className="bg-red-300" />
      <img
        src={imageUrl}
        style={{
          visibility: albumImageLoaded ? "visible" : "hidden",
          position: "absolute",
          ...albumImageDimensions,
        }}
        onLoad={() => setAlbumImageLoaded(true)}
        loading="lazy"
        className="w-full"
      />
      <h1 className="w-full text-center text-2xl truncate font-bold">{name}</h1>
      <p className="w-full text-center text-base truncate">{artist}</p>
    </div>
  )
}
