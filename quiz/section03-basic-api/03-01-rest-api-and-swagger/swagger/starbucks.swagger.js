// starbucks.swagger.js

/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피 조회
 *     tags: [coffee]
 *     parameters:
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "메리카아노"
 *                   kcal:
 *                     type: int
 *                     example: 5
 */

