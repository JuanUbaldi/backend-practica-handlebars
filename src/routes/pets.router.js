import express from "express";
export const petsRouter = express.Router();

let mascotas = [
  { name: "chatran", edad: 4, ciudad: "necochea", id: 1 },
  { name: "rintintin", edad: 2, ciudad: "loberia", id: 2 },
  { name: "hocicos", edad: 3, ciudad: "Tandil", id: 3 },
  { name: "talero", edad: 3, ciudad: "Tandil", id: 4 },
];

petsRouter.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    msg: "las mascotas",
    data: mascotas,
  });

  /* EJEMPLO CON MATH RANDOM()
  const variable = Math.floor(Math.random() * mascotas.length);
  return res.status(200).render("index", mascotas[variable]); */
});
petsRouter.post("/", (req, res) => {
  const mascotaNueva = req.body;
  mascotaNueva.id = (Math.random() * 1000000).toFixed(0);
  mascotas.push(mascotaNueva);
  res.status(200).json({
    status: "success",
    msg: "las mascota nueva",
    data: mascotaNueva,
  });
});
