"use server"; // Correct server-side directive

import User from "@/modals/user.modal";
import dbConnect from "@/lib/db";

// Function to create a new user
export async function createUser(user: any) {
  try {
    // Establish database connection
    await dbConnect();

    // Create new user in the database
    const newUser = await User.create(user);

    // Return the new user in a safe format
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user.");
  }
}
