// Calcula las cuotas basadas en el metodo frances
// cuota = (capital * interes) / (1 - (1 + interes) ^ -n)

exports.calcularMetodoFrances = (capital, tasaInteres, periodo) => {
  if (
    (capital >= 0 || capital < 0) &&
    (tasaInteres >= 0 || tasaInteres < 0) &&
    (periodo >= 0 || periodo < 0)
  ) {
    let cuota = 0;
    let interes = 0;
    let capital2 = 0;
    const cuotas = [];

    // Tranformar los años a meses
    periodo = Math.round(periodo * 12);
    // Calcular la tasa de interes en decimal
    tasaInteres = tasaInteres / 100;

    interes = capital * tasaInteres;
    cuota = interes / (1 - (1 + tasaInteres) ** -periodo);
    capital2 = cuota - interes;
    capital -= capital2;

    for (let i = 0; i < periodo; i++) {
      cuotas[i] = {
        mes: i + 1,
        capital: Number.parseFloat(capital2.toFixed(2)),
        interes: Number.parseFloat(interes.toFixed(2)),
        cuota: Number.parseFloat(cuota.toFixed(2)),
        deuda: Number.parseFloat(capital.toFixed(2)),
      };

      interes = capital * tasaInteres;
      capital2 = cuota - interes;
      capital -= capital2;
    }

    return cuotas;
  } else {
    return false;
  }
};
