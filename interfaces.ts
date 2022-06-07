export interface CharacterLocation {
  name: string
  url: string
}

export interface Character {
  id: number
  name: string
  url: string
  created: string
  status: 'Dead' | 'Alive' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[]
}

