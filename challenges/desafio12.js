db.produtos.updateMany(
    { nome: { $ne: "McChicken" } },
    {
        $addToSet: { ingredientes: "ketchup" },
    },
    { upsert: true },
  );
  db.produtos.find(
    {},
    { _id: false, nome: true, ingredientes: true },
  );