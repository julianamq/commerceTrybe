db.produtos.updateMany(
    { descricao: { $exists: true } },
    { $rename: {
        descricao: "descricaoSite",
      },
    },
  );

  db.produtos.find(
    {},
    { _id: false, nome: true, descricaoSite: true },
  );

// db.collection.updateMany({}, 
//     { $rename: { descricao: "descricaoSite" } });
//     db.collection.find({}, { nome: 1, descricaoSite: 1 });