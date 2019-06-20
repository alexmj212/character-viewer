export enum Abilities {
    STR = "Strength",
    DEX = "Dexterity",
    CON = "Constitution",
    WIS = "Wisdom",
    INT = "Intelligence",
    CHA = "Charisma"
}

export interface BaseClassInterface {
    name: string,
    description: string,
    hitDie: number,
    primaryAbility: Abilities[],
    saves: Abilities[]
}
