import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  type User,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

const googleProvider = new GoogleAuthProvider();

/**
 * Opens a Google sign-in popup and returns the authenticated Firebase user.
 */
export async function signInWithGoogle(): Promise<User> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("[authService] Google sign-in failed:", error);
    throw error;
  }
}

/**
 * Signs in with email and password.
 */
export async function signInWithEmail(
  email: string,
  password: string,
): Promise<User> {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("[authService] Email sign-in failed:", error);
    throw error;
  }
}

/**
 * Creates a new account with email, password and display name.
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  displayName: string,
): Promise<User> {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
    return result.user;
  } catch (error) {
    console.error("[authService] Email sign-up failed:", error);
    throw error;
  }
}

/**
 * Signs the current user out of Firebase.
 */
export async function logout(): Promise<void> {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("[authService] Logout failed:", error);
    throw error;
  }
}
