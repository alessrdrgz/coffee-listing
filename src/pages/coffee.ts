import type { APIRoute } from 'astro'
import Coffees from '../data/coffees.json'

export const GET: APIRoute = async (): Promise<Response> => {
  return new Response(JSON.stringify(Coffees))
}
