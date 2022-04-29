import { ReactElement } from 'react'
import Link from 'next/link'

import { Anchor } from './styles'

interface ContactCardProps {
  href: string
  icon: ReactElement
  title: string
}

export function ContactCard({ href, icon, title }: ContactCardProps) {
  return (
    <Link passHref href={href}>
      <Anchor target="_blank">
        {icon} {title}
      </Anchor>
    </Link>
  )
}
