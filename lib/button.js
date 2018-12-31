/**
 * TODO: Button functions
 *
 */

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
        outline: 0;
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
        outline: 0;
        `;
}

function disableBtn() {
  return `
        display: inline-block;
        font-size: 1em;
        font-weight: 300;
        padding: 0.375rem 0.75rem;
        border-radius: 4px;
        border: none;
        pointer-events: none;
        background-color: #DFDFDF;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #9F9F9F;
        cursor: default;
        outline: 0;
        `;
}

function btn(type) {
  const selectBtn = {
    square: squareBtn,
    round: roundBtn,
    disable: disableBtn
  };
  return selectBtn[type] ? selectBtn[type] : squareBtn;
}

export default btn;
