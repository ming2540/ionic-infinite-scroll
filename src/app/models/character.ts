export interface Character {
    name: string;
    decease: boolean;
}

export interface CharacterQuery {
    lastPage: boolean;
    results: Character[];
}