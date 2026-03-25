import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import type { UserDocument, UserPlan } from "../types";

/**
 * Ensures a Firestore document exists for the given user.
 * On first login, creates the document with plan "free".
 * Returns the user document data.
 */
export async function ensureUserDocument(
  uid: string,
): Promise<UserDocument> {
  try {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data() as UserDocument;
      return {
        plan: data.plan ?? "free",
        createdAt: data.createdAt ?? Date.now(),
        layout: data.layout ?? [],
      };
    }

    // First login – create the document
    const newDoc: UserDocument = {
      plan: "free",
      createdAt: Date.now(),
      layout: [],
    };

    await setDoc(ref, newDoc);
    return newDoc;
  } catch (error) {
    console.error("[userService] Failed to ensure user document:", error);
    throw error;
  }
}

/**
 * Fetches the user's current plan from Firestore.
 */
export async function getUserPlan(uid: string): Promise<UserPlan> {
  try {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data() as UserDocument;
      return data.plan ?? "free";
    }

    return "free";
  } catch (error) {
    console.error("[userService] Failed to fetch user plan:", error);
    return "free";
  }
}

/**
 * Updates the user's plan in Firestore.
 * (Used when upgrading to PRO – payment integration would call this.)
 */
export async function updateUserPlan(
  uid: string,
  plan: UserPlan,
): Promise<void> {
  try {
    const ref = doc(db, "users", uid);
    await setDoc(ref, { plan }, { merge: true });
  } catch (error) {
    console.error("[userService] Failed to update plan:", error);
    throw error;
  }
}
