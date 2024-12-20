import { Schema, model, Types } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  role: Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
});

const User = model<IUser>('User', userSchema);

export default User;
