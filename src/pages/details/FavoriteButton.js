import StarOutlineIcon from '@mui/icons-material/StarOutline'
import StarIcon from '@mui/icons-material/Star'

function FavoriteButton({ onToggleFavorite, isFavorite }) {
  const starSize = 30

  return (
    <button onClick={onToggleFavorite} style={{ background: 'none', border: 'none' }}>
      {isFavorite ? <StarIcon style={{ color: 'f7d917', fontSize: starSize }} /> : <StarOutlineIcon style={{ fontSize: starSize }} />}
    </button>
  )
}

export default FavoriteButton
