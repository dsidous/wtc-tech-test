import { Router } from 'express';

export const router = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      Actors&Directors:
 *        type: object
 *        properties:
 *          count:
 *            type: number
 *            example: 1
 *          values:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: ridley scott
 *                info:
 *                  type: object
 *                  properties:
 *                    movies:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          title:
 *                            type: string
 *                            example: Blade Runner
 *                          type:
 *                            type: string
 *                            enum: [movie,series]
 *                            example: movie
 *                    awards:
 *                      type: array
 *                      items:
 *                        type: string
 *                      example: ["Nominated for 2 Oscars. Another 5 wins & 6 nominations."]
 */

/**
 * @swagger
 * name: Actors
 * path:
 *  /api/actors/:
 *    get:
 *      summary: Get list of all actors
 *      tags: [Actors]
 *      responses:
 *        "200":
 *          description: Actors schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Actors&Directors'
 */
router.get('/', (req, res) => {
  const { mapOfActors } = req['context'].maps;
  const actors = {
    actors: {
      count: mapOfActors.size,
      values: [...mapOfActors].map(([name, info]) => ({
        name,
        info,
      })),
    },
  };
  res.send(actors);
});
export default router;
