import "./itemListContainer.css"

/* eslint-disable react/prop-types */
const ItemListContainer = ({saludo}) => {
  return (
    <div className="itemListContainer">
      <p>{saludo}</p>
    </div>
  )
}

export default ItemListContainer
