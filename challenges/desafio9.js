db.produtos.find(
    {
    $and: [
    { "valoresNutricionais.0.quantidade": { $lt: 500 } },
    ],
    },
    { _id: false, nome: true },
    ); 