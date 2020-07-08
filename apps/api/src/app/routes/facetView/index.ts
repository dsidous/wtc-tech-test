import { Router } from 'express';
const router = Router();

import facetActors from './facetActors';
import facetDirectors from './facetDirectors';
import facetMovies from './facetMovies';

/**
 * @swagger
 *  components:
 *    schemas:
 *      Facets:
 *        type: object
 *        properties:
 *          movies:
 *            type: object
 *            properties:
 *              label:
 *                type: number
 *                example: Movies
 *              filters:
 *                type: object
 *                properties:
 *                  type:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: Movies
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: movie
 *                            count:
 *                              type: number
 *                              example: 21
 *                  years:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: Years
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: 1939
 *                            count:
 *                              type: number
 *                              example: 21
 *                  metascore:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: Metascore
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: < 60
 *                            count:
 *                              type: number
 *                              example: 12
 *                            filterCode:
 *                              type: string
 *                              example: 0
 *                  genre:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: Genre
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: Action
 *                            count:
 *                              type: number
 *                              example: 10
 *          actors:
 *            type: object
 *            properties:
 *              label:
 *                type: number
 *                example: Actors
 *              filters:
 *                type: object
 *                properties:
 *                  movies:
 *                    type: object
 *                    properties:
 *                      label:
 *                        type: string
 *                        example: "Number of movies done"
 *                      values:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            label:
 *                              type: string
 *                              example: Adam Sandler
 *                            count:
 *                              type: number
 *                              example: 2
 *          directors:
 *            type: object
 *            properties:
 *              label:
 *                type: number
 *                example: Directors
 *              filters:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    label:
 *                      type: string
 *                      example: "Number of movies directed"
 *                    values:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          label:
 *                            type: string
 *                            example: Billy Wilder
 *                          count:
 *                            type: number
 *                            example: 2
 */

/**
 * @swagger
 * name: Facets
 * path:
 *  /api/facets/:
 *    get:
 *      summary: Get list of all facets
 *      tags: [Facets]
 *      responses:
 *        "200":
 *          description: Facets schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Facets'
 */

router.use('/', (req, res) => {
  const { mapOfActors, mapOfDirectors, mapOfMovies } = req['context'].maps;

  const facetFilters = {
    ...facetMovies(mapOfMovies),
    ...facetActors(mapOfActors),
    ...facetDirectors(mapOfDirectors),
  };

  res.send(facetFilters);
});

export default router;
