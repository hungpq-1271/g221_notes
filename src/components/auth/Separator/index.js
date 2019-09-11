import React from 'react'
import styled from 'styled-components'

const HeaderSeparation = styled.h4`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #818078;
  opacity: .5;
  line-height: 0.1em;
  margin: 10px 0 20px;
`
const SpanSeparation = styled.span`
  background: #fff;
  padding: 0 10px;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
`

export default function Separator() {
  return (
    <HeaderSeparation>
      <SpanSeparation>OR</SpanSeparation>
    </HeaderSeparation>
  )
}
