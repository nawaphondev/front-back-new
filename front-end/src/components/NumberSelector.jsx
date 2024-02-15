import { useState, forwardRef } from 'react'
import Icons from './ui/Icons'
import { cn } from '@/lib/utils'

const NumberSelector = forwardRef(function NumberSelector({quantity, className}, ref) {
  const [value, setValue] = useState(quantity)
  
  return (
    <div className='flex flex-row items-center justify-center p-2 border rounded-md select-none'>
      <Icons.minus onClick={() => setValue(prev => {
        if (prev <= 0) return prev
        else return prev - 1
      })} className='w-8 h-8' />
      <input
        type="number"
        ref={ref}
        value={value}
        onChange={(e) => {
          if (e.target.value <= 0) return
          setValue(e.target.value)
        }}
        className={cn(className, "text-center select-none")}
      />
      <Icons.plus onClick={() => setValue(prev => prev + 1)} className='w-8 h-8' />
    </div>
  )
})

export default NumberSelector