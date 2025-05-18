export async function sendLikeNotification(like: { id: string }) {

  // Get the like record

  // Check for push token 
  // const pushToken = data?.posts?.profiles?.push_token;
  // if (!pushToken) {
  //   return;
  // }

  // Send message
  // const message = {
  //   to: pushToken,
  //   sound: 'default',
  //   title: 'Someone liked your post',
  //   body: `${data?.posts?.profiles.username} liked your post!`,
  //   data: { postId: data.posts.id },
  // };
  // sendPushNotification(message);
}

async function sendPushNotification(message: any) {
  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}
