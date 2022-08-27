// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import Book from './models/Book.js';

const db = mongoose.connection
db.on('connected' , ()=>{
    console.log('Se ha conectado a la base de datos 🟢');
})
db.on('connecting',()=>{
    console.info('Intentando conectar a la  base de datos demongo 🟡');
})
db.on('disconnected',()=>{
    console.log('Se ha desconectado la base de datos 🔴')
})
db.on('error',()=>{
    console.error('Ha ocurrido un error en la conexion 🔴');
})

mongoose.connect('mongodb://localhost:27017/test',()=>{
    console.log('Callback de funcion connect')
    /**
     * TODO:
     * 1- Crear un libro
     * 2- Actualizar un libro
     * 3- Leer un libro
     * 4- Borrar un libro
     */
    Book.create(
        {
        author:'Isacc',
        title:'Como programar en un dia',
        edition:'2022 g13',
        isbn: '012343234u1',
        pages:10,
        publishDate: new Date(),
    }
    )
         
    
})