import express from "express";
import {
  getRestaurants,
  getRestaurantById,
  createRestaurant
} from "../controllers/restaurant.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Restaurants
 */

/**
 * @swagger
 * /api/restaurants:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Restaurants]
 */
router.get("/", getRestaurants);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   get:
 *     summary: Get restaurant by ID
 *     tags: [Restaurants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/:id", getRestaurantById);

/**
 * @swagger
 * /api/restaurants:
 *   post:
 *     summary: Create new restaurant
 *     tags: [Restaurants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - image
 *               - description
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *                 example: Evos
 *               image:
 *                 type: string
 *                 example: https://example.com/evos.jpg
 *               description:
 *                 type: string
 *                 example: Best burgers in town
 *               category:
 *                 type: string
 *                 example: 65f8d7b12abc123456789012
 */
router.post("/", createRestaurant);

export default router;
