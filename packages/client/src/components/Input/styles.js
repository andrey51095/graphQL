import {concatPixels} from '../../utils';

export const redBorder = {
  borderColor: 'red',
};
export const darkBorder = {
  borderColor: 'black',
};
export const $item = {
  borderStyle: 'solid',
  borderWidth: '2px',
  height: '20px',
  marginBottom: '3px',
  marginLeft: '3px',
  marginRight: '3px',
  marginTop: '3px',
  paddingBottom: '3px',
  paddingLeft: '3px',
  paddingRight: '3px',
  paddingTop: '3px',
  width: '150px',
}
export const $input = {
};
export const $select = {
  padding: '2px',
  width: concatPixels([$item.width, [2, $item.padding], [2, $item.borderWidth]]),
  height: concatPixels([$item.height, [2, $item.padding], [2, $item.borderWidth]]),
};
