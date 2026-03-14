import {typeObject} from "./typeObject.js";

export const calculateTypeDamageMultiplier = (
    attackerType,
    attackType,
    defendTypes,
) => {
    let multiplier = 1;

    defendTypes.forEach((type) => {
        console.log(attackType);
        multiplier *= typeObject[attackType][type] ?? 1;
    });

    //Checks if its a STAB move
    attackerType.forEach((type) => {
        if (attackType === type) {
            multiplier = multiplier * 1.5;
        }
    });

    console.log(multiplier);
    return multiplier;
};
