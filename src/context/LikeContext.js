import React, {useState} from 'react';

export const LikeContext = React.createContext()

const LikeContextProvider = ({children}) => {
  const [likes, setLikes] = useState([]);
  const [nombres, setNombres] = useState([])

  return(
    <LikeContext.Provider value={{ likes, setLikes, nombres, setNombres }}>
      {children}
    </LikeContext.Provider>
  )
}

export default LikeContextProvider;