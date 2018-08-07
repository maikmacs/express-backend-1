import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    correo: { type: String, required: true },
    fecha_nacimiento: { type: Date },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    foto: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg"
    },
    genero: { type: String, required: true },
    pais: { type: String },
    ubicacion: { type: String, required: true },
    rol: { type: String, required: true },
    user_pay: { type: String, required: true }
  },
  { collection: "Users", timestamps: true }
);

UserSchema.pre("save", next => {
  let user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

export default mongoose.model("Users", UserSchema);