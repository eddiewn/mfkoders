import { typeObject } from "./typeObject.js";

export const calculateTypeDamageMultiplier = (attackType, defendTypes) => {
    let multiplier = 1;

    defendTypes.forEach(type => {
        console.log(attackType)
        multiplier = multiplier * typeObject[attackType][type] ?? 1;
    });

    console.log(multiplier)
    return multiplier;
}