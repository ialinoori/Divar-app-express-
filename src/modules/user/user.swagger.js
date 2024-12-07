/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Implementation of User module
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     sendOTP:
 *       type: object
 *       required:
 *         - mobile
 *       properties:
 *         mobile: 
 *           type: string
 *     checkOTP:
 *       type: object
 *       required:
 *         - mobile
 *         - code
 *       properties:
 *         mobile: 
 *           type: string
 *         code: 
 *           type: string
 */

/**
 * @swagger
 * /user/whoami:
 *   get:
 *     summary: get user Info
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /auth/check-otp:
 *   post:
 *     summary: Check the one-time password
 *     tags:
 *       - Auth
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/checkOTP"
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/checkOTP"
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP or mobile number
 *       404:
 *         description: OTP record not found
 */
