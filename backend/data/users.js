import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Manisrinivasa',
    email: 'mani@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nishanth',
    email: 'nishanth@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
