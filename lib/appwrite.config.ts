import * as sdk from "node-appwrite";

// Destructure environment variables
export const {
  NEXT_PUBLIC_ENDPOINT,
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_DATABASE_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
} = process.env;

const API_KEY = process.env.API_KEY; // Separate destructuring for server-side only variables

// Log client-side and server-side variables
console.log("NEXT_PUBLIC_ENDPOINT:", NEXT_PUBLIC_ENDPOINT);
console.log("NEXT_PUBLIC_PROJECT_ID:", NEXT_PUBLIC_PROJECT_ID);
console.log("API_KEY:", API_KEY);
console.log("NEXT_PUBLIC_DATABASE_ID:", NEXT_PUBLIC_DATABASE_ID);

// Check if the critical environment variables are defined
if (!NEXT_PUBLIC_ENDPOINT) {
  throw new Error(
    "NEXT_PUBLIC_ENDPOINT is not defined. Check your .env.local file."
  );
}

if (!NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("NEXT_PUBLIC_PROJECT_ID is not defined. Check your .env.local file.");
}

if (!API_KEY) {
  throw new Error("API_KEY is not defined. Check your .env.local file.");
}

const client = new sdk.Client();

client
  .setEndpoint(NEXT_PUBLIC_ENDPOINT) // Use the endpoint from the environment variable
  .setProject(NEXT_PUBLIC_PROJECT_ID) // Use the project ID from the environment variable
  .setKey(API_KEY); // Use the API key from the environment variable

// Export initialized SDK modules
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
