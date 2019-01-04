function animation() {
  return `
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
}

function inputDark() {
  return `
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
}

function input(type) {
  const selectInput = {
    animation: animation,
    dark: dark
  };
  return selectInput[type] ? selectInput[type] : animation;
}

export default input;
