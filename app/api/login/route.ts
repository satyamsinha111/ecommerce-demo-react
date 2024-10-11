import { hash } from 'bcryptjs';
import User from '../../models/User';
import connectToDatabase from '../../utils/mongodb';

export async function POST(request:any){
    const {email,password} = await request.json();
    await connectToDatabase();
    const existingUser = await User.findOne({ email });
    if(!existingUser){
        return new Response(JSON.stringify({ message: 'User already exists' }), {
            status: 400,
          });
    }

    return new Response(JSON.stringify(existingUser))
}