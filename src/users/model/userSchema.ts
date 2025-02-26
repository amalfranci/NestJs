import * as mongoose from 'mongoose';

// Define the User interface
export interface IUser {
  name: string;
  email: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the User Schema
export const UserSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  },
);

// Create the Mongoose model
export const User = mongoose.model<IUser>('User', UserSchema);

// Export the User type
export type User = mongoose.HydratedDocument<IUser>;