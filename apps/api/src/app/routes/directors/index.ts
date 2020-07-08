import { Router } from 'express';
const router = Router();
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
 *                  example: Harrison Ford
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
 * name: Directors
 * path:
 *  /api/directors/:
 *    get:
 *      summary: Get list of all directors
 *      tags: [Directors]
 *      responses:
 *        "200":
 *          description: Directors schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Actors&Directors'
 */

router.get('/', (req, res) => {
  const { mapOfDirectors } = req['context'].maps;

  const directors = {
    directors: {
      count: mapOfDirectors.size,
      values: [...mapOfDirectors].map(([name, info]) => ({
        name,
        info,
      })),
    },
  };
  res.send(directors);
});

export default router;
