export interface BaseChartConfig {
  data: number[]
  labels?: string[]

  startAtZero?: boolean

  height: number
  width: number

  hasXAxisLabels?: boolean
  hasYAxisLabels?: boolean

  xAxisLabelCount?: number
  // @TODO implement: yAxisLabelCount?: number

  xAxisLabelStyle?: {
    fontFamily?: string
    fontSize?: number
    fontWeight?: number
    color?: string
    rotation?: number
    offset?: number
    prefix?: string
    suffix?: string,
    position?: string // 'left' or 'right'
    width: number,
    decimals?: number
  }
  yAxisLabelStyle?: {
    fontFamily?: string
    fontSize?: number
    fontWeight?: number
    color?: string
    rotation?: number
    offset?: number
    position?: string // 'top' or 'bottom'
    height: number
  }

  hasXAxisBackgroundLines?: boolean
  hasYAxisBackgroundLines?: boolean

  xAxisBackgroundLineStyle?: {
    strokeWidth?: number
    color?: string
  }
  yAxisBackgroundLineStyle?: {
    strokeWidth?: number
    color?: string
  }

  backgroundStyle?: {
    color?: string
    gradient?: {
      to: string
      from: string
    }
    opacity?: {
      to: number
      from: number
    }
  }
}
