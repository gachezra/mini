import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const users = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return NextResponse.json({ users: 'This is get' });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' }, 
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const userData = await req.json();
    
    if (!userData || !userData.id) {
      return NextResponse.json(
        { error: 'Invalid user data' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const q = query(
      collection(db, 'users'), 
      where('id', '==', userData.id)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 200 }
      );
    }

    // Add new user
    const docRef = await addDoc(collection(db, 'users'), {
      ...userData,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      message: 'User added successfully',
      userId: docRef.id
    }, { status: 201 });

  } catch (error) {
    console.error('Error adding user:', error);
    return NextResponse.json(
      { error: 'Failed to add user' },
      { status: 500 }
    );
  }
}