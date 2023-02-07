db.produtos.updateMany(
    {},
    {
      $push: {
        tags: {
          $each: [
            "combo", "tasty",
          ],
          $sort: 1,
        },
      },
    },
    { upsert: true },
  );

  db.produtos.find({}, { _id: false, nome: true, tags: true });