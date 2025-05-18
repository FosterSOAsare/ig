import { View, Image, Text, useWindowDimensions, Pressable } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "cloudinary-react-native";
// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from "~/src/lib/cloudinary";
import PostContent from "./PostContent";
import { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { sendLikeNotification } from "../utils/notifications";

export default function PostListItem({ post }: any) {
	const [isLiked, setIsLiked] = useState(false);
	const [likeRecord, setLikeRecord] = useState(null);

	useEffect(() => {
		if (post.my_likes.length > 0) {
			setLikeRecord(post.my_likes[0]);
			setIsLiked(true);
		}
	}, [post.my_likes]);

	useEffect(() => {
		if (isLiked) {
			saveLike();
		} else {
			deleteLike();
		}
	}, [isLiked]);

	const fetchLike = async () => {
		// Check if user has liked the post
		// If yes , setIsLiked to true and setLikeRecord to the record from the table
	};

	const saveLike = async () => {
		if (likeRecord) {
			return;
		}

		// Insert user id in the table of likes

		// // send notification to the owner of that post
		// sendLikeNotification(data[0]);

		// Set the table to setLikeRecord
		// setLikeRecord(data[0]);
	};

	const deleteLike = async () => {
		if (likeRecord) {
			// Delete like from table and set setLikeRecord() to null
		}
	};

	const avatar = cld.image(post.user.avatar_url || "user_rubrec");
	avatar.resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face())));

	return (
		<View className="bg-white">
			{/* Header */}
			<View className="p-3 flex-row items-center gap-2">
				<AdvancedImage cldImg={avatar} className="w-12 aspect-square rounded-full" />
				<Text className="font-semibold">{post.user.username || "New user"}</Text>
			</View>

			{/* Content */}
			<PostContent post={post} />

			{/* Icons */}
			<View className="flex-row gap-3 p-3">
				<AntDesign onPress={() => setIsLiked(!isLiked)} name={isLiked ? "heart" : "hearto"} size={20} color={isLiked ? "crimson" : "black"} />
				<Ionicons name="chatbubble-outline" size={20} />
				<Feather name="send" size={20} />

				<Feather name="bookmark" size={20} className="ml-auto" />
			</View>

			<View className="px-3 gap-1">
				<Text className="font-semibold">{post.likes?.[0]?.count || 0} likes</Text>
				<Text>
					<Text className="font-semibold">{post.user.username || "New user"} </Text>
					{post.caption}
				</Text>
			</View>
		</View>
	);
}
