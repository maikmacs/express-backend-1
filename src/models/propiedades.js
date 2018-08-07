import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PropiedadesSchema = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion_corta: { type: String, required: true },
    descripcion_larga: { type: String, required: true },
    ubicacion: { type: String, required: true },
    pais: { type: String, required: true },
    user: { type: Schema.Type.ObjectId, ref: 'Users', required: true },
    tipo: { type: Number, required: true },
    calificacion: {
      type: [
        {
          comentario: String,
          estrellas: Number
        }
      ]
    },
    caaracteristicas: [
      { type: Schema.Type.ObjectId, ref: 'Caracteristicas', required: true }
    ],
    servicios: [
      { type: Schema.Type.ObjectId, ref: 'Servicios', required: true }
    ],
    fotos: [],
    disponibilidad_inicial: {
      type: Date,
      required: true
    },
    disponibilidad_final: {
      type: Date,
      required: true
    }
  },
  { collection: 'Propiedades', timestamps: true }
);

export default mongoose.model('Propiedades', PropiedadesSchema);
