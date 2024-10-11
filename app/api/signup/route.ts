import { hash } from 'bcryptjs';
import User from '../../models/User';
import connectToDatabase from '../../utils/mongodb';

export async function POST(request:any) {
  const { email, password } = await request.json();

  // Connect to the database
  await connectToDatabase();

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: 'User already exists' }), {
      status: 400,
    });
  }

  // Hash the password
  const hashedPassword = await hash(password, 12);

  // Create a new user
  const user = new User({
    email,
    password: hashedPassword,
  });

  await user.save();

  return new Response(JSON.stringify({ message: 'User created successfully' }), {
    status: 201,
  });
}
