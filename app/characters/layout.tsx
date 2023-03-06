interface CharactersLayoutProps {
    children: React.ReactNode
}

const CharactersLayout: React.FC<CharactersLayoutProps> = ({children}) => {
  return (
      <>
         {children}
      </>
  )
}

export default CharactersLayout
