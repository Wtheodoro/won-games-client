import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'black' | 'white'
  lineDetail?: 'lineLeft' | 'lineBottom'
  lineColor?: LineColors
  size?: 'small' | 'medium'
}

const Heading = ({
  children,
  color = 'white',
  lineDetail,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineDetail={lineDetail}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
