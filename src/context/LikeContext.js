import React, {useState} from 'react';

export const LikeContext = React.createContext()

const LikeContextProvider = ({children}) => {
  const [likes, setLikes] = useState([]);

  const addLike = (id) => {
    setLikes([...likes, id])
  }
  const removeLike = (id) => {
    setLikes(likes.filter((currentId)=>currentId!==id))
  }
  const emptyLikes = () => setLikes([])

  const nLikes = likes.length

  const isLiked = (id) => likes.includes(id)

  return(
    <LikeContext.Provider value={{ isLiked, nLikes, addLike, removeLike, emptyLikes }}>
      {children}
    </LikeContext.Provider>
  )
}

export default LikeContextProvider;