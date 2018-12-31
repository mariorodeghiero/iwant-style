/**
 * TODO: Card
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

export default card;
