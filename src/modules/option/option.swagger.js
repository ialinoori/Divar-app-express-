/**
 * @swagger
 * tags:
 *   - name: Option
 *     description: Implementation of Option module
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     CreateOption:
 *       type: object
 *       required:
 *         - title
 *         - key
 *         - type
 *         - category
 *       properties:
 *         title:
 *           type: string
 *         key:
 *           type: string
 *         guid:
 *           type: string
 *         required:
 *           type: boolean
 *         category:
 *           type: string
 *         type:
 *           type: string
 *           enum:
 *               - number
 *               - string
 *               - boolean
 *               - array
 *         enum:
 *           type: array
 *           items:
 *             type: string
 *
 *     OptionResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         key:
 *           type: string
 *         guid:
 *           type: string
 *         category:
 *           type: string
 *         type:
 *           type: string
 *         enum:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateOption:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         key:
 *           type: string
 *         guid:
 *           type: string
 *         required:
 *           type: boolean
 *         category:
 *           type: string
 *         type:
 *           type: string
 *           enum:
 *               - number
 *               - string
 *               - boolean
 *               - array
 *         enum:
 *           type: array
 *           items:
 *             type: string
 *
 *     OptionResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         key:
 *           type: string
 *         guid:
 *           type: string
 *         category:
 *           type: string
 *         type:
 *           type: string
 *         enum:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /option:
 *   post:
 *     summary: Create a new option for a category
 *     tags:
 *       - Option
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/CreateOption"
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateOption"
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/OptionResponse"
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /option/{id}:
 *   put:
 *     summary: update option
 *     tags:
 *       - Option
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/UpdateOption"
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/UpdateOption"
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/OptionResponse"
 *       400:
 *         description: Invalid input
 */


/**
 * @swagger
 * /option/by-category/{categoryId}:
 *   get:
 *     summary: Get all options of a category
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/OptionResponse"
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /option/by-category-slug/{slug}:
 *   get:
 *     summary: Get all options of a category
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/OptionResponse"
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /option/{id}:
 *   get:
 *     summary: Get option by id
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/OptionResponse"
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */
/**
 * @swagger
 * /option:
 *   get:
 *     summary: Get all options
 *     tags:
 *       - Option
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/OptionResponse"
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */

/**
 * @swagger
 * /option/{id}:
 *   delete:
 *     summary: delete option by id
 *     tags:
 *       - Option
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/OptionResponse"
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Category not found
 */


