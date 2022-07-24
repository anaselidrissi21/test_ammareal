BEGIN;

DROP TABLE IF EXISTS "message";


CREATE TABLE "message" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "nom" VARCHAR(20) NOT NULL,
  "email" VARCHAR(20) NOT NULL,
  "tel" VARCHAR(10) NOT NULL,
  "message" TEXT NOT NULL
);



INSERT INTO "message" ("nom", "email", "tel", "message") VALUES
('bul ko', 'testBko1@bulko.net', '0770707070', 'Pony ipsum dolor sit amet it needs to be about 20% cooler. Parasprite Cheerilee friend Ms. Peachbottom, Cheese Sandwich sun Zecora dragon Pumpkin Cake Trixie Spitfire Princess Luna. Tail Big McIntosh Flam Scootaloo, Donut Joe Philomena rainbow power Gummy Cranky Doodle Donkey Wonderbolts breezies Zecora friend. Lightning Dust Prim Hemline Wonderbolts Nightmare Moon Ms. Harshwhinny laugher kindness.'),
('bul ko2', 'testBko2@bulko.net', '0770707070', 'Pony ipsum dolor sit amet magic nulla adipisicing apples commodo magna. Pony Daring Do Matilda Cheese Sandwich chaos dolor, aliquip hoof Spitfire veniam Dr. Caballeron mane Maud Pie. Featherweight Bon Bon Opalescence Matilda hay. Alicorn Everfree Forest magic culpa sunt Twist occaecat proident pony consequat. Cupcake non Flash Sentry, enim dolore ex aliqua muffin Zecora wing pony chaos Sonata Dusk horn irure.'),
('', 'testUnknow@bulko.net', '0770707072', '');



COMMIT;

