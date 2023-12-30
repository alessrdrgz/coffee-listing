import CoffeeService from '@/services/CoffeeService'
import type { Coffee } from '@/types/Coffee'
import { signal } from '@preact/signals'
import { useEffect } from 'preact/hooks'
import type { JSX } from 'preact/jsx-runtime'
import CoffeeCard from './CoffeeCard'

const allProducts = signal(true)
const coffees = signal<Coffee[]>([])

interface CoffeeListProps {
  class?: string
}

export default function CoffeeList({
  class: className
}: CoffeeListProps): JSX.Element {
  useEffect(() => {
    const filters: Record<string, boolean | number | string> = {}
    if (!allProducts.value) filters.available = true
    CoffeeService.getAllCoffees(filters)
      .then((data) => (coffees.value = data))
      .catch(console.error)
  }, [allProducts.value])

  return (
    <>
      <div class="flex items-center justify-center gap-2 mt-4">
        <button
          disabled={allProducts}
          class="disabled:bg-[#6F757C] rounded-lg text-[#FEF7EE] py-2 px-3 font-semibold text-label transition-all ease-in-out duration-300"
          id="all-products-btn"
          onClick={() => (allProducts.value = true)}
        >
          All Products
        </button>
        <button
          disabled={!allProducts.value}
          class="disabled:bg-[#6F757C] rounded-lg text-[#FEF7EE] py-2 px-3 font-semibold text-label transition-all ease-in-out duration-300"
          id="available-products-btn"
          onClick={() => (allProducts.value = false)}
        >
          Available Now
        </button>
      </div>

      <ul
        class={`${className} grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14`}
      >
        {coffees.value.map((coffee) => (
          <li>
            <CoffeeCard coffee={coffee} />
          </li>
        ))}
      </ul>
    </>
  )
}
