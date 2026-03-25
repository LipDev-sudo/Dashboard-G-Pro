import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import {
  signInWithGoogle as googleSignIn,
  signInWithEmail as emailSignIn,
  signUpWithEmail as emailSignUp,
  logout as firebaseLogout,
} from "../services/authService";
import { ensureUserDocument } from "../services/userService";
import type {
  AuthContextType,
  AuthStatus,
  UserProfile,
} from "../types";
import { PLAN_LIMITS } from "../types";

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuthContext(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  // ── Firebase Auth listener ────────────────────────────────────────────────
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setStatus("unauthenticated");
        return;
      }

      try {
        const userDoc = await ensureUserDocument(firebaseUser.uid);

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          plan: userDoc.plan,
          createdAt: userDoc.createdAt,
        });
        setStatus("authenticated");
      } catch (error) {
        console.error("[AuthProvider] Failed to initialize user:", error);
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          plan: "free",
          createdAt: Date.now(),
        });
        setStatus("authenticated");
      }
    });

    return unsub;
  }, []);

  // ── Auth actions ──────────────────────────────────────────────────────────
  const signInWithGoogle = useCallback(async () => {
    try {
      setStatus("loading");
      await googleSignIn();
    } catch (error) {
      setStatus("unauthenticated");
      throw error;
    }
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    try {
      setStatus("loading");
      await emailSignIn(email, password);
    } catch (error) {
      setStatus("unauthenticated");
      throw error;
    }
  }, []);

  const signUpWithEmail = useCallback(async (email: string, password: string, name: string) => {
    try {
      setStatus("loading");
      await emailSignUp(email, password, name);
    } catch (error) {
      setStatus("unauthenticated");
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await firebaseLogout();
      setUser(null);
      setStatus("unauthenticated");
    } catch (error) {
      console.error("[AuthProvider] Logout failed:", error);
      throw error;
    }
  }, []);

  // ── Plan helpers ──────────────────────────────────────────────────────────
  const widgetLimit = user ? PLAN_LIMITS[user.plan] : PLAN_LIMITS.free;

  const canAddWidget = useCallback(
    (currentCount: number) => currentCount < widgetLimit,
    [widgetLimit],
  );

  // ── Memoised value ────────────────────────────────────────────────────────
  const value = useMemo<AuthContextType>(
    () => ({
      user,
      status,
      signInWithGoogle,
      signInWithEmail,
      signUpWithEmail,
      logout,
      widgetLimit,
      canAddWidget,
    }),
    [user, status, signInWithGoogle, signInWithEmail, signUpWithEmail, logout, widgetLimit, canAddWidget],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
