import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Button from "~/src/components/Button";

export default function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	async function signInWithEmail() {}

	async function signUpWithEmail() {
		setLoading(true);

		setLoading(false);
	}

	return (
		<View style={styles.container}>
			<View style={[styles.verticallySpaced, styles.mt20]}>
				<TextInput onChangeText={(text) => setEmail(text)} value={email} placeholder="email@address.com" autoCapitalize={"none"} className="border border-gray-300 p-3 rounded-md" />
			</View>
			<View style={styles.verticallySpaced}>
				<TextInput
					onChangeText={(text) => setPassword(text)}
					value={password}
					secureTextEntry={true}
					placeholder="Password"
					autoCapitalize={"none"}
					className="border border-gray-300 p-3 rounded-md"
				/>
			</View>
			<View style={[styles.verticallySpaced, styles.mt20]}>
				<Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
			</View>
			<View style={styles.verticallySpaced}>
				<Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		padding: 12,
	},
	verticallySpaced: {
		paddingTop: 4,
		paddingBottom: 4,
		alignSelf: "stretch",
	},
	mt20: {
		marginTop: 20,
	},
});
