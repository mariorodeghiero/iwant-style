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
    padding: 10px 20px 0px 20px;
    background: #666666;
    max-width: 350px;
    max-height: 250px;
    border-radius: 5px;
    hr {
      margin-top: 30px;
      background-color: red;
      opacity: 0.3;
    }
    h1 {
      text-align: left;
      font-size: 1.6rem;
      font-weight: 300;
      color: #ffffff;
    }
    p {
      max-height: 100px;
      overflow: hidden;
      text-align: left;
      font-weight: 100;
      color: #ffffff;
    }
    
    div {
      display: inline-flex;
      a {
        padding: 10px;
        margin: 0 auto;
        text-decoration: none;
        color: #d0d5db;
        margin-bottom: 20px;
        :hover {
          color: #efe;
        }
      }
    }   
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
   * TODO: Comments
   */

  function comment(color) {
    const comment = `
    position: relative;
    display: inline-block;
    margin: 10px;
    min-width: 230px;
    max-width: 315px;
    width: 100%;
    background-color: #333333;
    color: #141414;
    text-align: left;
    box-shadow: none !important;
    border-radius: 4px;
    @font-face {
      font-family: 'Roboto';
      src: url('https://fonts.googleapis.com/css?family=Roboto');
    }
    * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    section {
      width: 100%;
      color: #fff;
      padding: 0px 20px 10px 20px;
      display: inline-block;
      margin-bottom: 15px;
      border-radius: 5px;
      position: relative;
      h2 {
        font-size: 0.8rem;
      }
      p {
        font-size: 0.9rem;
        font-weight: 100;
      }
      :after {
        content: '';
        position: absolute;
        left: -15px;
        top: 15%;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 0px 10px;
        border-color: #333333 transparent transparent transparent;
        transform: rotate(90deg);
      }
    }
    img {
      position: absolute;
      left: -100px;
      top: 0px;
      border-radius: 5px;
      height: 70px;
    }
      `;

    const selectComment = {
      comment: comment
    };
    return selectComment[color] ? selectComment[color] : comment;
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
   * TODO: Input
   */

  function inputDark(type) {
    const inputDark = `
    input {
      background: #222;
      background: linear-gradient(#333, #222);
      border: 1px solid #444;
      border-radius: 5px 0 0 5px;
      box-shadow: 0 2px 0 #000;
      color: #efe;
      display: block;
      float: left;
      font-size: 13px;
      font-weight: 400;
      height: 40px;
      margin: 0;
      padding: 0 10px;
      text-shadow: 0 -1px 0 #000;
      width: 200px;
      outline: 0;
      ::-webkit-search-cancel-button {
        display: none;
      }
      ::-webkit-input-placeholder,
      :-moz-placeholder {
        color: #888;
      }
      :focus:-moz-placeholder,
      :focus::-webkit-input-placeholder {
        color: #efe;
      }
    }
    button {
      outline: 0;
      background: #222;
      background: linear-gradient(#333, #222);
      box-sizing: border-box;
      border: 1px solid #444;
      border-left-color: #000;
      border-radius: 0 5px 5px 0;
      box-shadow: 0 2px 0 #000;
      color: #fff;
      display: block;
      float: left;
      font-family: 'Cabin', helvetica, arial, sans-serif;
      font-size: 13px;
      font-weight: 400;
      height: 40px;
      line-height: 40px;
      margin: 0;
      padding: 0;
      position: relative;
      text-shadow: 0 -1px 0 #000;
      width: 80px;
    }
  `;

    const selectInput = {
      inputDark: inputDark
    };
    return selectInput[type] ? selectInput[type] : inputDark;
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
  /**
   * TODO: Preloader Circle
   */

  function preloaderCircle(type) {
    const preloaderCircle = `
    div {
      width: 50px;
      height: 50px;
      display: block;
      background: transparent;
      border-radius: 50%;
      border: 7px solid rgba(28, 128, 128, 0.2);
      border-left: 7px solid #ff0080;
      animation: 2s rotate infinite linear;
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
      `;

    const selectPrealoader = {
      preloaderCircle: preloaderCircle
    };
    return selectPrealoader[type] ? selectPrealoader[type] : preloaderCircle;
  }

  var iwantStyle = {
    btn: btn,
    bg: bg,
    card: card,
    avatar: avatar,
    navBar: navBar,
    pagination: pagination,
    preloader: preloader,
    preloaderCircle: preloaderCircle,
    input: input,
    inputDark: inputDark,
    comment: comment
  };
  module.exports = iwantStyle;
})();
