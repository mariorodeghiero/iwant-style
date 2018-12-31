'use strict';

(function() {
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

  /**
   * TODO: Background Colors
   *
   */

  function bg(color) {
    const navyGradient = `
      background: rgba(0,32,63,1);
      background: -webkit-linear-gradient(top, rgba(0,32,63,1) 0%, rgba(0,10,20,1) 100%);
      background: linear-gradient(to bottom, rgba(0,32,63,1) 0%, rgba(0,10,20,1) 100%);
    `;

    const tealGradient = `
      background: rgba(57,204,204,1);
      background: -webkit-linear-gradient(top, rgba(57,204,204,1) 0%, rgba(34,122,122,1) 100%);
      background: linear-gradient(to bottom, rgba(57,204,204,1) 0%, rgba(34,122,122,1) 100%);
    `;

    const skyGradient = `
      background: #005C97;
      background: -webkit-linear-gradient(to right, #363795, #005C97);
      background: linear-gradient(to right, #363795, #005C97);
    `;

    const selectColor = {
      dark: '#000000',
      navy: '#001f3f',
      teal: '#39CCCC',
      white: '#ffffff',
      pink: '#ff0081',
      navyGradient: navyGradient,
      tealGradient: tealGradient,
      skyGradient: skyGradient
    };
    return selectColor[color] ? selectColor[color] : '#ff0081';
  }

  /**
   * TODO: Cards
   */

  function card(type) {
    const card = `
      width: 335px;
      height: 240px;
      padding: 10px;
      position: relative;
      margin: 0.5rem 0 1rem 0;
      background-color: #001f3f;
      color: #ffffff;
      -webkit-transition: -webkit-box-shadow .25s;
      transition: -webkit-box-shadow .25s;
      transition: box-shadow .25s;
      transition: box-shadow .25s, -webkit-box-shadow .25s;
      border-radius: 2px;
    `;

    const selectCard = {
      card: card
    };
    return selectCard[type] ? selectCard[type] : card;
  }

  /**
   * TODO: Avatars
   */

  function avatar(type) {
    const avatar = `
      border-radius: 50%;
      box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
      border: 2px solid rgba(255, 255, 255, 0.5);
      position: absolute;
      width:70px;
      height: 70px;
      overflow: hidden;
      left: 15px;
      display: inline-block;
      vertical-align: middle;
    `;

    const selectAvatar = {
      avatar: avatar
    };
    return selectAvatar[type] ? selectAvatar[type] : avatar;
  }

  var iwantStyle = {
    btn: btn,
    bg: bg,
    card: card,
    avatar: avatar
  };

  /**
   * TODO: Navbar
   */

  function navBar(type) {
    const navBar = `
      color: #fff;
      background-color: #39CCCC;
      width: 100%;
      min-height: 56px;
      height: auto;
      line-height: 56px;
    `;
    const fixed = `
      color: #fff;
      background-color: #39CCCC;
      width: 100%;
      min-height: 56px;
      height: auto;
      line-height: 56px;
      position: fixed;
      `;

    const selectNavBar = {
      navBar: navBar,
      fixed: fixed
    };
    return selectNavBar[type] ? selectNavBar[type] : navBar;
  }
  /**
   * TODO: Pagination
   */

  function pagination(type) {
    const pagination = `
      li {
        display: inline-block;
        border-radius: 2px;
        text-align: center;
        vertical-align: top;
        height: 30px;
        a {
          color: #444;
          display: inline-block;
          font-size: 1.2rem;
          padding: 0 10px;
          line-height: 30px;
          text-decoration: none;
          :hover {
            background-color: #DFDFDF;
          }
        }
      }
      `;

    const selectPagination = {
      pagination: pagination
    };
    return selectPagination[type] ? selectPagination[type] : pagination;
  }
  /**
   * TODO: Input
   */

  function input(type) {
    const input = `
    position: relative;
    margin-bottom: 45px;
    input {
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 290px;
      border: none;
      border-bottom: 1px solid rgb(160, 160, 160, 0.8);
      :focus {
        outline: none;
      }
      :focus ~ label,
      :valid ~ label {
        top: -18px;
        font-size: 14px;
        color: rgb(184, 184, 184);
      }
      :focus ~ span:before,
      :focus ~ span:after {
        width: 51%;
      }
    }
    label {
      color: rgb(184, 184, 184);
      font-size: 18px;
      font-weight: 200;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 15px;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
    span {
      position: relative;
      display: block;
      width: 300px;
      /* border: 1px solid #000; */
      margin-left: 2px;
      :before,
      :after {
        content: '';
        height: 2px;
        width: 0;
        bottom: -1px;
        position: absolute;
        background: rgb(112, 112, 112, 0.4);
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
      }
      :before {
        left: 50%;
      }
      :after {
        right: 50%;
      }
      :before {
        left: 50%;
      }
      :after {
        right: 50%;
      }
    }
  `;

    const selectInput = {
      input: input
    };
    return selectInput[type] ? selectInput[type] : input;
  }

  /**
   * TODO: Preloader
   */

  function preloader(type) {
    const preloader = `
    display: grid;
    grid-template-columns: repeat(3, 25px);
    grid-column-gap: 10px;
    div {
      margin: 25px;
      width: 25px;
      height: 25px;
      border-radius: 100%;
      background: #DFDFDF;
      -webkit-animation: bounce 1.48s ease-in-out infinite both;
      animation: bounce 1.48s ease-in-out infinite both;
      :nth-child(1) {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
      }
      :nth-child(2) {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
      }
      @-webkit-keyframes bounce {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      
      @keyframes bounce {
        0%,
        80%,
        100% {
          -webkit-transform: scale(0);
          transform: scale(0);
        }
        40% {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      @-webkit-keyframes beat {
        to {
          -webkit-transform: scale(1.5);
          transform: scale(1.5);
        }
      }
      @keyframes beat {
        to {
          -webkit-transform: scale(1.5);
          transform: scale(1.5);
        }
      }
    }
      `;

    const selectPrealoader = {
      preloader: preloader
    };
    return selectPrealoader[type] ? selectPrealoader[type] : preloader;
  }

  var iwantStyle = {
    btn: btn,
    bg: bg,
    card: card,
    avatar: avatar,
    navBar: navBar,
    pagination: pagination,
    preloader: preloader,
    input: input
  };
  module.exports = iwantStyle;
})();
