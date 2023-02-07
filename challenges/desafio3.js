db.produtos.find(
    {},
    { nome: 1, vendidos: 1, _id: 0 },
    ).limit(1).sort({ vendidos: -1 }); 