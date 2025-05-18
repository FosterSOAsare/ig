import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

type Auth = {
	isAuthenticated: boolean;
	session: null;
	user?: { id: number; name: string };
};

const AuthContext = createContext<Auth>({
	isAuthenticated: false,
	session: null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
	const [session, setSession] = useState<null>(null);
	const [isReady, setIsReady] = useState(false);

	// Get user session - Fetch loggedin user
	useEffect(() => {}, []);

	if (!isReady) {
		return <ActivityIndicator />;
	}

	return <AuthContext.Provider value={{ session, user: { id: 3, name: "Asare" }, isAuthenticated: true }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
