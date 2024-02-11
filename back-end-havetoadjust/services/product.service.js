// product.service.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new product
const createProduct = async (data) => {
  return prisma.product.create({
    data,
  });
};

// Get all products
const getAllProducts = async () => {
  return prisma.product.findMany();
};

// Get a product by ID
const getProductById = async (id) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
};

// Update a product by ID
const updateProductById = async (id, data) => {
  return prisma.product.update({
    where: {
      id,
    },
    data,
  });
};

// Delete a product by ID
const deleteProductById = async (id) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
