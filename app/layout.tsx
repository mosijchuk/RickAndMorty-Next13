
import React from "react";
import Header from "@components/../src/widgets/Header/Header";
import { Roboto} from '@next/font/google'
import '../styles/globals.css'

interface RootLayoutProps {
    children: React.ReactNode
}

const roboto = Roboto({
   weight : ['400', '500', '900'],
   preload: true
})

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
  return (
    <html lang="en">
      <head>
          <title>Rick And Morty</title>
      </head>
      <body className={roboto.className}>
      <Header />
      {children}
      </body>
    </html>
  )
}

export default RootLayout
