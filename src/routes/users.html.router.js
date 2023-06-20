import express from "express";
export const usersHtmlRouter = express.Router();

let usuarios = [
  { name: "juan", edad: 40, ciudad: "necochea", id: 1 },
  { name: "marcos", edad: 32, ciudad: "loberia", id: 2 },
  { name: "marcos", edad: 35, ciudad: "Tandil", id: 3 },
];
let usuario = { name: "antuel", edad: 34, ciudad: "Tandil", isAdmin: true };

usersHtmlRouter.get("/", (req, res) => {
  /* return res.status(200).json({
    status: "success",
    message: "listado de usuarios",
    data: { usuarios },
  }); */
  return res.status(200).render("usuarios", { usuarios, usuario });
});

usersHtmlRouter.post("/", (req, res) => {
  const dataNueva = req.body;
  dataNueva.id = (Math.random() * 1000000).toFixed(0);
  usuarios.push(dataNueva);
  return res.status(200).json({
    status: "success",
    message: "listado de usuarios",
    data: { dataNueva },
  });
});
