const concatPixels = array => {

  return array.reduce((acc, val) => `${+acc.slice(0, -2) + +val.slice(0, -2)}px`);
};

export const redBorder = {
  borderColor: 'red',
};

export const darkBorder = {
  borderColor: 'black',
};

export const $item = {
  paddingTop: '3px',
  paddingBottom: '3px',
  paddingLeft: '3px',
  paddingRight: '3px',
  borderWidth: '2px',
  borderStyle: 'solid',
  width: '150px',
  marginTop: '3px',
  marginBottom: '3px',
  marginLeft: '3px',
  marginRight: '3px',
  height: '20px',
}
export const $input = {
};

export const $select = {
  padding: '2px',
  width: concatPixels([$item.width, [2, $item.padding], [2, $item.borderWidth]]),
  height: concatPixels([$item.height, [2, $item.padding], [2, $item.borderWidth]]),
};