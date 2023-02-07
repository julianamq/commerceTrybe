db.produtos.find(
    {
      nome: { $not: { $in: ["Big Mac", "McChicken"] } },
    },
    { nome: true, curtidas: true, vendidos: true, _id: false },
  );