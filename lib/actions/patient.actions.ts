import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
    try {
        const newUser = await users.create(
        ID.unique(),
        user.email,
        user.phone,
        "temporaryPassword123",
        user.name
        );
        console.log("User created:", newUser)

        return parseStringify(newUser)
    } catch (err: any) {
        console.log("Error during user creation:", err);

        if (err && err?.code === 409) {
            console.log("User already exists, checking existing user...");
        
            const existingUsersList = await users.list([
                Query.equal("email", [user.email]),
            ]);

            return existingUsersList?.users[0];

        } else {
            console.error("An unexpected error occurred:", err);
        }
    }
};
