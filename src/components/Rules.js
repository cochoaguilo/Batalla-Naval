import '../style/app.css'

const Rules = () => {
  return (
    <div className="rules">
      <h1>Batalla Naval</h1>
      <p>
        El juego: Se trata de descubrir la ubicación de 10 barcos repartidos en
        el tablero. Los barcos son: 1 acorazado (de 4 casillas), 2 cruceros (de
        3 casillas), 3 destructores (de 2 casillas) y 4 submarinos (de una
        casilla).
        <br />
        <br/>
        Las reglas: Los barcos están colocados siguiendo las filas y columnas
        (nunca en diagonal) y no se tocan entre sí (ni siquiera por las
        esquinas). Esto último equivale a decir que en todas las casillas que
        rodean a un barco hay agua.
        <br />
        <br />
        Las pistas: En la columna de la derecha y en la fila inferior se
        colocaron algunos números. Estos indican la cantidad de casillas
        ocupadas por la flota en la respectiva fila o columna. También se
        conocen algunas casillas ocupadas por la flota. La forma nos está
        indicando también si se trata de un extremo o del centro de un barco o
        de un submarino. No fue el caso de este problema, pero también se suelen
        indicar algunas casillas ocupadas con agua.
      </p>
    </div>
  );
};

export default Rules;
