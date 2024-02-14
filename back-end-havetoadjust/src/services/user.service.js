// user.service.js
const prisma = require('../db')

// Create a new user
const createUser = async (data) => {
  return prisma.user.create({
    data,
  }).then(user => {
    prisma.shoppingCart.create({
      data: {
        userId: user.id,
      }
    })
  });
};

// Get all users
const getAllUsers = async () => {
  return prisma.user.findMany();
};

// Get a user by ID
const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    }
  });
};

// Update a user by ID
const updateUserById = async (id, data) => {
  return prisma.user.update({
    where: {
      id,
    },
    data
  });
};

// Delete a user by ID
const deleteUserById = async (id) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};

const getUserByUsername = async (username) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    return user;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getUserByUsername,
};
