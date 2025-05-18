import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import posts from "~/assets/data/posts.json";
import PostListItem from "~/src/components/PostListItem";
import { useAuth } from "~/src/providers/AuthProvider";

export default function FeedScreen() {
	const [posts, setPosts] = useState<any>([]);
	const [loading, setLoading] = useState(false);

	const { user } = useAuth();

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		if (!user) return;
		setLoading(true);
		setPosts(posts);
		setLoading(false);
	};

	return (
		<FlatList
			data={posts}
			renderItem={({ item }) => <PostListItem post={item} />}
			contentContainerStyle={{
				gap: 10,
				maxWidth: 512,
				alignSelf: "center",
				width: "100%",
			}}
			showsVerticalScrollIndicator={false}
			onRefresh={fetchPosts}
			refreshing={loading}
		/>
	);
}
