import mongoose from "mongoose";

/**
 * 1-Esquema (Schema) es un molde
 * 2.-Nombre del modelo
 */

//esquema

 const schema = new mongoose.Schema({
     title: String,
     author: String,
     edition: String,
     pages: Number,
     isbn: String,
     publishDate: Date,
 }); // new mongoose.Schema({ campo1,campo2,campo3}) Schema es una clase ({ el objeto que va a definir ese Schema})

const name = "Book"; //este es el nombre del schema

export default mongoose.model(name,schema); //asi se crea el modelo de Book con esta estructura que definimos
 