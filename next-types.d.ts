import Image from 'next/image'
import Link from 'next/link'

declare module 'next/image' {
  export default Image = Image
}

declare module 'next/link' {
  export default Link = Link
}