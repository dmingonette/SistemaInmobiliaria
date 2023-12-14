/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('INMOBILIARIA');

db.getCollection('USUARIOS').drop()

// Insert a few documents into the USUARIOS collection.
db.getCollection('USUARIOS').insertMany([
  { nombre: 'admin', email: 'admin@gmail.com', password: '123456', rol: 'administrador' },
  { nombre: 'Juan', email: 'juan@example.com', password: 'suContraseña123', rol: 'usuario' },
  { nombre: 'María', email: 'maria@example.com', password: 'suContraseña456', rol: 'usuario' },
  { nombre: 'Carlos', email: 'carlos@example.com', password: 'suContraseña789', rol: 'usuario' },
  { nombre: 'Ana', email: 'ana@example.com', password: 'suContraseñaABC', rol: 'usuario' },
  { nombre: 'Luis', email: 'luis@example.com', password: 'suContraseñaDEF', rol: 'usuario' }
]);

use('INMOBILIARIA');

db.getCollection('PROPIEDADES').drop()

db.getCollection('PROPIEDADES').insertMany([
  {"tipo": "Departamento", "tipo_de_propiedad": "Alquiler", "domicilio": "Av. Libertador 456", "barrio": "Centro", "dormitorios": 2, "antiguedad": 5, "condición": "Excelente", "descripcion": "Moderno departamento con vista al río", "moneda": "ARS", "precio": 20000, "esDestacada": true},
  {"tipo": "Oficina", "tipo_de_propiedad": "Venta", "domicilio": "Diagonal Norte 789", "barrio": "Microcentro", "dormitorios": 0, "antiguedad": 15, "condición": "Regular", "descripcion": "Espacio de oficinas en edificio corporativo", "moneda": "USD", "precio": 1500000, "esDestacada": false},
  {"tipo": "Casa", "tipo_de_propiedad": "Venta", "domicilio": "Callejón de los Sueños 321", "barrio": "Barrio Privado", "dormitorios": 4, "antiguedad": 8, "condición": "Muy Buena", "descripcion": "Hermosa casa con piscina y quincho", "moneda": "USD", "precio": 350000, "esDestacada": true},
  {"tipo": "Local Comercial", "tipo_de_propiedad": "Alquiler", "domicilio": "Av. Corrientes 987", "barrio": "Once", "dormitorios": 0, "antiguedad": 10, "condición": "Buena", "descripcion": "Amplio local con vidriera", "moneda": "ARS", "precio": 30000, "esDestacada": false},
  {"tipo": "Terreno", "tipo_de_propiedad": "Venta", "domicilio": "Ruta Nacional 456, Km 23", "barrio": "Zona Rural", "dormitorios": 0, "antiguedad": 0, "condición": "Nuevo", "descripcion": "Terreno para desarrollo agrícola", "moneda": "USD", "precio": 100000, "esDestacada": false}
])