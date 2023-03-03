export interface CharacterType {
   "id": number,
   "name": string,
   "status": string,
   "species": string,
   "type": string,
   "gender": string,
   "origin": {
      "name": string,
      "url": string
   },
   "location": {
      "name": string,
      "url": string
   },
   "image": string,
   "episode": Array<string>,
   "url": string,
   "created": string
}

export interface CharactersResponseType {
   info: {
      count: number
      pages: number
      next: string | null
      prev: string | null
   },
   results: Array<CharacterType>
}
