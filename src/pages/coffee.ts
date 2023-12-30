import Coffees from '@/data/coffees.json'
import type { Coffee } from '@/types/Coffee'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request }): Promise<Response> => {
  const url = new URL(request.url)
  const query = new URLSearchParams(url.search)

  let data = [...Coffees]

  for (const [key, value] of query.entries()) {
    console.log({ key, value })
    let parsedValue: boolean | string | number

    switch (key) {
      case 'available':
        parsedValue = Boolean(value)
        break

      default:
        parsedValue = value
    }

    data = data.filter((coffee) => coffee[key as keyof Coffee] === parsedValue)
  }

  return new Response(JSON.stringify(data))
}
