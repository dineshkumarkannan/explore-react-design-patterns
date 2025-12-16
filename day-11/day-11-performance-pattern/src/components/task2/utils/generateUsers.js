export default function generateUsers(count = 1000) {
  const users = [];
  for (let i = 1; i <= count; i++) {
    users.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
    });
  }
  return users;
}
