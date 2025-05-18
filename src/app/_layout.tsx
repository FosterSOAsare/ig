import { Stack } from "expo-router";
import "../../global.css";
import AuthProvider from "../providers/AuthProvider";
import "node-libs-react-native/globals";
import "react-native-polyfill-globals/auto";
export default function RootLayout() {
	return (
		<AuthProvider>
			<Stack screenOptions={{ headerShown: false }} />
		</AuthProvider>
	);
}
