import { Schema, model, Document } from 'mongoose'

interface User extends Document {
  email?: string
  firstName?: string
  lastName?: string
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = () => `${this.firstName} ${this.lastName}`

export default model<User>('User', UserSchema)
