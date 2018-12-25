function squareBtn() {
  return `
      display: inline-block;
      font-size: 1em;
      font-weight: 300;
      padding: 0.375rem 0.75rem;
      background-color: #ff0081;
      color: #fff;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      `;
}
function roundBtn() {
  return `
      display: inline-block;
      font-size: 1em;
      background-color: #ff0081;
      color: #fff;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      `;
}

export function bg(color) {
  const selectColor = {
    dark: '#000000',
    white: '#ffffff',
    pink: '#ff0081'
  };
  return selectColor[color] ? selectColor[color] : '#ff0081';
}
exports.btn = function(type) {
  const selectBtn = {
    square: squareBtn,
    round: roundBtn
  };
  return selectBtn[type] ? selectBtn[type] : '#ff0081';
};
