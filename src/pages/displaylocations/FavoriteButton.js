// FavoriteButton.jsx
import React, { useState } from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarIcon from '@mui/icons-material/Star'

function FavoriteButton({ id, onToggleFavorite }) {
  const starSize = 30

  const localStorageKey = `isFavorite_${id}`
  const initialIsFavorite = JSON.parse(localStorage.getItem(localStorageKey)) || false

  const [isFavorite, setIsFavorite] = useState(initialIsFavorite)

  const handleToggleFavorite = () => {
    const newIsFavorite = !isFavorite
    setIsFavorite(newIsFavorite)
    localStorage.setItem(localStorageKey, JSON.stringify(newIsFavorite))
    onToggleFavorite(newIsFavorite)
  }

  return (
    <button
      onClick={handleToggleFavorite}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px', 
        background: 'none',
        border: 'none',
      }}
    >
      {isFavorite ? (
        <StarIcon style={{ color: '#eead2d', fontSize: starSize }} />
      ) : (
        <StarOutlineIcon style={{ fontSize: starSize }} />
      )}
    </button>
  )
}

export default FavoriteButton
