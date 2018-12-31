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

export default navBar;
