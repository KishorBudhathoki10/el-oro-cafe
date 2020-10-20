import React from "react";

import classes from "./CoffeeMenu.module.css";

function CoffeeMenu({ menuItem }) {
  const renderMenuAccordingly = () => {
    if (menuItem) {
      if (menuItem === "Coffee") {
        return (
          <div className={classes.CoffeeMenu}>
            <h2>Coffee</h2>

            <div className={classes.CoffeeMenu_container}>
              <ul>
                <li>Espresso</li>
                <li>Cortado</li>
                <li>Cafe con Leche</li>
                <li>Cafe Latte</li>

                <li>Capuccino</li>
                <li>Flat White</li>
                <li>Americano</li>
                <li>Americano Large</li>

                <li>Mocha</li>
                <li>Batch Brew</li>
                <li>Iced Latte</li>
                <li>Iced Americano</li>
                <li>Extra Large Latte</li>
              </ul>

              <ul>
                <li>1.50€</li>
                <li>1.60€</li>
                <li>1.80€</li>
                <li>2.00€</li>

                <li>2.00€</li>
                <li>2.30€</li>
                <li>1.70€</li>
                <li>2.20€</li>

                <li>2.30€</li>
                <li>2.30€</li>
                <li>3.80€</li>
                <li>3.50€</li>
                <li>2.50€</li>
              </ul>
            </div>
          </div>
        );
      } else if (menuItem === "Tea") {
        return (
          <div className={classes.CoffeeMenu}>
            <h2>Tea</h2>

            <div className={classes.CoffeeMenu_container}>
              <ul>
                <li>Masala Chai</li>
                <li>Dirty Chai</li>
                <li>Macha Latte</li>
                <li>Green Tea</li>

                <li>Black Tea</li>
                <li>Earl Grey</li>
                <li>Pu Erh</li>
                <li>Rooibos</li>

                <li>Poleo Menta</li>
                <li>Manzanilla</li>
                <li>Frutos del Bosque</li>
              </ul>

              <ul>
                <li>2.50€</li>
                <li>3.50€</li>
                <li>3.00€</li>
                <li>2.00€</li>

                <li>2.00€</li>
                <li>2.00€</li>
                <li>2.00€</li>
                <li>2.00€</li>

                <li>2.00€</li>
                <li>2.00€</li>
                <li>2.00€</li>
              </ul>
            </div>
          </div>
        );
      } else if (menuItem === "Breakfast") {
        return (
          <div className={classes.CoffeeMenu}>
            <h2>Breakfast</h2>

            <div className={classes.CoffeeMenu_container}>
              <ul>
                <li>Masala Chai</li>
                <li>Dirty Chai</li>
                <li>Macha Latte</li>
                <li>Green Tea</li>

                <li>Black Tea</li>
                <li>Earl Grey</li>
                <li>Pu Erh</li>
                <li>Rooibos</li>

                <li>Poleo Menta</li>
                <li>Manzanilla</li>
                <li>Frutos del Bosque</li>
              </ul>

              <ul>
                <li>2.50€</li>
                <li>3.50€</li>
                <li>3.00€</li>
                <li>2.00€</li>

                <li>2.00€</li>
                <li>2.00€</li>
                <li>2.00€</li>
                <li>2.00€</li>

                <li>2.00€</li>
                <li>2.00€</li>
                <li>2.00€</li>
              </ul>
            </div>
          </div>
        );
      }
    } else {
      return <div style={{ display: "none" }}></div>;
    }
  };

  return renderMenuAccordingly();
}

export default CoffeeMenu;
