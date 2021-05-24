import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'black' | 'white'
  lineDetail?: 'lineLeft' | 'lineBottom'
}

const Heading = ({ children, color = 'white', lineDetail }: HeadingProps) => (
  <S.Wrapper color={color} lineDetail={lineDetail}>
    {children}
  </S.Wrapper>
)

export default Heading
