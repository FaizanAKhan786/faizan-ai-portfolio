'use client';
/** Shadcn-style local primitive. Keeps design controls owned by the project. */
import * as React from 'react';
import {cva,type VariantProps} from 'class-variance-authority';
import {cn} from '@/lib/cn';
const variants=cva('inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:pointer-events-none disabled:opacity-50',{variants:{variant:{default:'bg-violet-400 text-ink hover:opacity-90',outline:'border border-white/20 bg-transparent text-white hover:bg-white/10',ghost:'text-white hover:bg-white/10'},size:{default:'h-11 px-5 text-sm',sm:'h-9 px-3 text-xs',icon:'h-10 w-10'}},defaultVariants:{variant:'default',size:'default'}});
type Props=React.ButtonHTMLAttributes<HTMLButtonElement>&VariantProps<typeof variants>;
export const Button=React.forwardRef<HTMLButtonElement,Props>(function Button({className,variant,size,...props},ref){return <button ref={ref} className={cn(variants({variant,size}),className)} {...props}/>});
