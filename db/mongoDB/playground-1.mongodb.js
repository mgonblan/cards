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
use('sample_training');

db.getCollection('inspections').updateMany({result: "Completed"}, {$set: {result: "No Violation Issued"}});
db.getCollection('inspections').updateMany({result: "Fail"},{$set: {multa: 100}});
db.getCollection('inspections').updateMany({"address.city":"ROSEDALE",result: "Fail"}, {$inc: {"multa": 150}});


// Push mete al final, pop saca del final, $pull saca un documento completo
// Push no tiene en cuenta lo que hay en el Array
// addToSet
// Cuando hago deletemany se hacen tantos deleteone como registros tenga
// Haciendo updates, el documento queda bloqueado
// Puede haber lecturas sucias después de hacer un update
// ReplaceOne: Reemplaza un documento existente con un nuevo documento. Es mejor no usarlo.
// Para actualizar toda el array usamos $[]
// "arrayFilters"
// Areglo y con total cosa
// each: itera sobre un array
// $each es para varias operaciones por campo
// $ush, $sort
// Slce de  un arreglo
// $set {
    area:{
        $multiply: "$w","$h"
    }
// Upsert = true significa que crea un documento.
// Si existe un documento con el mismo id, lo actualiza, si no lo crea
// BUCKETING: Empaquetamos un documento para dividir.
// findOneAndUpdate: Busca un documento y actualiza.
// In índice es una estructura ordenada
// Los índices sirven de apuntadores dentro del sistema de archivos
// Las bases de datis usan B+ - Tree
// Las bases de datos son mucho más grandes que la RAM, por lo que necesitamos optimizar la lecto-escritura.
// El único índice es el _id,
// Hay que saber cuando crear un índice, para no distraer los updates y deletes.
// cold scan es cuando escanea la tabla completa.
// El developer de la base de datos debe poner los índices de manera correcta.
// single fields, compound fields, multikey, geospatial

