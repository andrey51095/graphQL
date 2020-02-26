const reducer = (acc, val) =>`${+acc.slice(0, -2) + +val.slice(0, -2)}px`;

export const concatPixels = array => array.reduce(reducer);
