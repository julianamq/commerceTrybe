db.produtos.updateMany(
    {},
    {
      $push: {
              valoresNutricionais: {
          $each: [],
          $sort: { percentual: -1 },
        },
      },

    },
    { upsert: true },
  );

  db.produtos.find({}, { _id: false, nome: true, valoresNutricionais: true });