import { TagContainer } from './styles'

interface TagProps {
  tags: string[]
}

export function Tag({ tags }: TagProps) {
  return (
    <TagContainer>
      {tags.map((tagName) => (
        <span>{tagName}</span>
      ))}
    </TagContainer>
  )
}
