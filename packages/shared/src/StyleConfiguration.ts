type Style = Partial<{
  background: string
  'background-color': string
  border: string
}>

export interface StyleConfiguration {
  body: Style
}