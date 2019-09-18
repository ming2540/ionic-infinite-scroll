export interface Character {
    name: string;
    deceased: boolean;
}

export interface CharacterQuery {
    lastPage: boolean;
    results: Character[];
}