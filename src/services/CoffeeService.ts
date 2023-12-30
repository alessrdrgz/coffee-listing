import type { Coffee } from '@/types/Coffee'

const BASE_URL = import.meta.env.SITE
export default class CoffeeService {
  public static async getAllCoffees(
    filters?: Partial<Coffee>
  ): Promise<Coffee[]> {
    let url = `${BASE_URL}coffee?`

    if (filters != null) {
      const params = new URLSearchParams(
        filters as Record<keyof Coffee, any>
      ).toString()
      url += params
    }

    const response = await fetch(url)
    const coffees: Coffee[] = await response.json()
    return coffees
  }
}
