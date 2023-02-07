db.produtos.find(
    {
      ingredientes: "picles",
    },
    { _id: false, nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 } },
  );