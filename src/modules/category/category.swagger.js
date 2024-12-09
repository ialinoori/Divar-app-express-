/**
 * @swagger
 * tags:
 *   - name: Category
 *     description: Implementation of Category module
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     CreateCategory:
 *       type: object
 *       required:
 *         - name
 *         - icon
 *       properties:
 *         name:
 *           type: string
 *         slug:
 *           type: string
 *         icon:
 *           type: string
 *         parent:
 *           type: string
 */

/**
 * @swagger
 * /category:
 *   post:
 *     summary: create new category
 *     tags:
 *       - Category
 *     requestBody:
 *         content:
 *             application/x-www-form-urlencoded:
 *                  schema:
 *                       $ref: "#/components/schemas/CreateCategory"
 *             application/json:
 *                  schema:
 *                       $ref: "#/components/schemas/CreateCategory"
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: get categories
 *     tags:
 *       - Category
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Invalid input
 */
