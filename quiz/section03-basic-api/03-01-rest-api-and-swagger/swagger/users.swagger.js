// boards.swagger.js

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저 조회
 *     tags: [users]
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
 *                   email:
 *                     type: string
 *                     example: "2212@gmail.com"
 *                   name:
 *                     type: string
 *                     example: 길수
 *                   phone:
 *                     type: string
 *                     example: "010-2222-3333"
 *                   personal:
 *                     type: string
 *                     example: "123213-123213"
  *                   prefer:
 *                     type: string
 *                     example: "https://naver.com"
 */

