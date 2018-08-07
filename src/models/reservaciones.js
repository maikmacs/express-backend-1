import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

const ReservacionesSchema = new Schema(
  {
    user: { type: Schema.Type.ObjectId, ref: 'Users', required: true },
    propiedad: {
      type: Schema.Type.ObjectId,
      ref: 'Propiedades',
      required: true
    },
    status_pago: {
      type: boolean,
      required: true,
      default: false
    },
    numero_personas: {
      type: Number,
      required: true,
      default: 1
    },
    status_reservacion: {
      type: Boolean,
      required: true,
      default: 1
    },
    cargo_extra: {
      type: Number
    }
  },
  { collection: 'Reservaciones', timestamps: true }
);

export default mongoose.model('Reservaciones', ReservacionesSchema);
