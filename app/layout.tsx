
import React from "react";
import { Roboto} from '@next/font/google'
import '../styles/globals.css'
import Header from "@widgets/Header/Header";

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
          <title>The Rick And Morty</title>
      </head>
      <body className={roboto.className}>
      <Header />
      {children}
      </body>
    </html>
  )
}

export default RootLayout
