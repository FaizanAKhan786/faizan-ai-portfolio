import type { Config } from 'tailwindcss';
export default {
  content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./content/**/*.{ts,tsx}'],
  theme:{extend:{fontFamily:{display:['Space Grotesk','sans-serif'],body:['DM Sans','sans-serif'],mono:['DM Mono','monospace']},colors:{ink:'#090a0f',violet:{400:'#a898ff'},aqua:'#76d7df'},borderRadius:{xl:'14px'}}},
  plugins:[],
} satisfies Config;
