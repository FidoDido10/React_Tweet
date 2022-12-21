/**
 * ProfileImage es una función que devuelve un div con una imagen dentro.
 * @returns Un componente
 */
import React from 'react'

function ProfileImage({ image }) {
  // creo que una función que NO es una función es un COMPONENTE
  return (
    <div><img
      src={image.user.image}
      className="profile"
      alt="profile"
    /></div>
  )
}

export default ProfileImage

// rfce