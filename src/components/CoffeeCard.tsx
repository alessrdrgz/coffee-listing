import type { Coffee } from '@/types/Coffee'
import type { JSX } from 'preact/jsx-runtime'
import FilledStar from './icons/FilledStar'
import Star from './icons/Star'

interface CoffeeCardProps {
  coffee: Coffee
}

export default function CoffeeCard({ coffee }: CoffeeCardProps): JSX.Element {
  return (
    <article class="relative flex flex-col">
      <img
        class="rounded-xl"
        src={`/images/coffees/${coffee.image}`}
        alt={coffee.name}
      />
      {Boolean(coffee.popular) && (
        <span class="absolute top-2 left-2 bg-[#F6C768] rounded-full px-3 py-1 text-small font-bold">
          Popular
        </span>
      )}
      <div class="flex items-center justify-between mt-3">
        <p class="text-[#FEF7EE] text-body font-bold">{coffee.name}</p>
        <span class="bg-[#BEE3CC] rounded-md px-2 py-1 text-label font-semibold">
          ${coffee.price.toFixed(2)}
        </span>
      </div>

      <div class="flex items-end justify-between mt-2">
        <div class="flex items-end gap-1 *:text-label *:font-semibold">
          {coffee.rating != null ? (
            <>
              <span class="text-[#FEF7EE] flex items-end">
                <FilledStar />
                {coffee.rating}
              </span>
              <span class="text-[#6F757C]">({coffee.votes} votes)</span>
            </>
          ) : (
            <div class="flex gap-1 items-end">
              <Star />
              <span class="text-[#6F757C] text-label">No ratings</span>
            </div>
          )}
        </div>
        {!coffee.available && (
          <span class="text-body font-semibold text-[#ED735D]">Sold out</span>
        )}
      </div>
    </article>
  )
}
