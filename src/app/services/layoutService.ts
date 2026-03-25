import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import type { PlacedWidget, UserDocument } from "../types";

/**
 * Persists the user's widget layout to Firestore.
 * Uses merge to avoid overwriting other user fields (plan, createdAt).
 */
export async function saveLayout(
  userId: string,
  layout: PlacedWidget[],
): Promise<void> {
  try {
    await setDoc(doc(db, "users", userId), { layout }, { merge: true });
  } catch (error) {
    console.error("[layoutService] Failed to save layout:", error);
    throw error;
  }
}

/**
 * Loads the user's widget layout from Firestore.
 * Returns an empty array when no layout exists.
 */
export async function loadLayout(userId: string): Promise<PlacedWidget[]> {
  try {
    const ref = doc(db, "users", userId);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data() as UserDocument;
      return data.layout ?? [];
    }

    return [];
  } catch (error) {
    console.error("[layoutService] Failed to load layout:", error);
    throw error;
  }
}
