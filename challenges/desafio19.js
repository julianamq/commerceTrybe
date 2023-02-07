db.produtos.updateMany(
    {},
    {
      $pull: {
        ingredientes: {
          $eq: "cebola",
        },
      },
    },
  );

  db.produtos.find(
    {},
    { _id: false, nome: true, ingredientes: true },
  );