// Helper function to generate random date within a range
const getRandomDate = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

// Array of random friends
const randomFriends = [
  { id: 1, name: "user123" },
  { id: 2, name: "john_doe" },
  { id: 3, name: "alice_bob" },
  { id: 4, name: "mary_smith" },
  { id: 5, name: "peter_pan" },
  { id: 6, name: "emma_jones" },
  { id: 7, name: "david_clark" },
  { id: 8, name: "lisa_baker" },
  { id: 9, name: "michael_white" },
  { id: 10, name: "sarah_taylor" },
];

// Define the list of valid passwords
const validPasswords = ["f0o", "b4rc0de", "bazqaz"];

// Function to generate a random number of friends for each friend
const generateRandomFriendsList = () => {
  const numFriends = Math.floor(Math.random() * (randomFriends.length - 1)) + 1; // Random number of friends between 1 and randomFriends.length - 1
  const friendsList: any[] = [];

  while (friendsList.length < numFriends) {
    const randomIndex = Math.floor(Math.random() * randomFriends.length);
    const randomFriend = randomFriends[randomIndex];
    if (!friendsList.some((friend) => friend.name === randomFriend.name)) {
      friendsList.push(randomFriend);
    }
  }
  return friendsList;
};

// Array of friends with random friends list
const randomFriendsWithFriendsList = randomFriends.map((friend) => ({
  ...friend,
  friends: generateRandomFriendsList(),
}));

// Function to generate a random password from the valid passwords
const generateRandomPassword = () => {
  const randomIndex = Math.floor(Math.random() * validPasswords.length);
  return validPasswords[randomIndex];
};

// Array of friends with passwords
const randomFriendsWithPasswords = randomFriendsWithFriendsList.map(
  (friend) => ({
    ...friend,
    password: generateRandomPassword(),
  })
);

// Generate random posts for each friend
const randomPosts = randomFriends.map((friend) => {
  const numPosts = Math.floor(Math.random() * 10) + 1; // Random number of posts between 1 and 10
  return Array.from({ length: numPosts }, (_, index) => ({
    date: getRandomDate(new Date(2022, 0, 1), new Date()), // Random date between January 1, 2022, and now
    title: `Post ${index + 1}`,
    description: `Description for Post ${index + 1}`,
    author: friend,
  }));
});

const data = {
  posts: randomPosts.flat(),
  users: randomFriendsWithPasswords,
};

export default data;
