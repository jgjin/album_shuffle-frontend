import { useState } from "react"

import { type Album } from "../models/album"

type Props = {
  album: Album
}
export function AlbumCard({ album }: Props) {
  const [albumImageLoaded, setAlbumImageLoaded] = useState(false)
  const albumImageDimensions = {
    width: 300,
    height: 300,
  }

  const {
    image_url: imageUrl,
    name,
    artist,
    album_url: albumUrl,
    artist_url: artistUrl,
  } = album
  return (
    <div className="flex flex-col items-center p-4">
      <div style={albumImageDimensions} className="bg-red-300" />
      <a
        href={albumUrl}
        style={{
          position: "absolute",
        }}
      >
        <img
          src={imageUrl}
          style={{
            visibility: albumImageLoaded ? "visible" : "hidden",
            ...albumImageDimensions,
          }}
          onLoad={() => setAlbumImageLoaded(true)}
          loading="lazy"
        />
      </a>
      <a href={albumUrl} className="w-full">
        <h1 className="text-center text-2xl truncate font-bold">{name}</h1>
      </a>
      <a href={artistUrl} className="w-full">
        <p className="text-center text-base truncate">{artist}</p>
      </a>
    </div>
  )
}
