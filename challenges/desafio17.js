db.resumoProdutos.insertOne(
    {
       franquia: "McDonalds",
       totalProdutos: db.produtos.find({}, {}).count(),
    },
  );

  db.resumoProdutos.find(
    {},
    { _id: false, franquia: true, totalProdutos: true },
  );