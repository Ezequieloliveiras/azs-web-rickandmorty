import React, { useState } from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarIcon from '@mui/icons-material/Star'

function FavoriteButton({ id, onToggleFavorite }) {
    const starSize = 30

    // Gera uma chave única para armazenar no localStorage
    const localStorageKey = `isFavorite_${id}`

    // Utiliza uma função de inicialização para obter o valor do localStorage apenas uma vez durante a inicialização
    const initialIsFavorite = JSON.parse(localStorage.getItem(localStorageKey)) || false

    const [isFavorite, setIsFavorite] = useState(initialIsFavorite)

    const handleToggleFavorite = () => {
        const newIsFavorite = !isFavorite
        setIsFavorite(newIsFavorite)
        localStorage.setItem(localStorageKey, JSON.stringify(newIsFavorite))
        onToggleFavorite(newIsFavorite)
    }

    return (
        <button onClick={handleToggleFavorite} style={{ background: 'none', border: 'none' }}>
            {isFavorite ? <StarIcon style={{ color: '#eead2d', fontSize: starSize }} /> : <StarOutlineIcon style={{ fontSize: starSize }} />}
        </button>
    )
}

export default FavoriteButton
