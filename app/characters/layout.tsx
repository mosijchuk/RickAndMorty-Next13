interface CharactersLayoutProps {
    children: React.ReactNode
}

const CharactersLayout: React.FC<CharactersLayoutProps> = ({children}) => {
  return (
      <>
         <h3>Characters here</h3>
         {children}
      </>
  )
}

export default CharactersLayout
