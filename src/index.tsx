import React from 'react'
import { Platform } from 'react-native'
import { Line, Text } from 'react-native-svg'

import { BaseChartConfig } from './types'

export default class ChartBuilder {
  data: number[]
  labels: string[]

  startAtZero: boolean

  height: number
  width: number

  hasXAxisLabels?: boolean
  hasYAxisLabels?: boolean

  xAxisLabelCount: number

  xAxisPrefix?: string
  xAxisSuffix?: string

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

  minVal: number
  maxVal: number

  public baseHeight: number

  public Y_AXIS_LABEL_HEIGHT: number
  public X_AXIS_LABEL_WIDTH: number


  public xAxisLabelWidth: number
  public leftAlignedXAxisLabelWidth: number
  private xAxisLabelPosition: string
  private yDistanceBetweenXLabels: number

  public yAxisLabelHeight: number
  public yLabelSlotWidth: number

  private deltaBetweenGreatestAndLeast: number

  constructor ({
    data,
    labels,
    startAtZero = true,
    height,
    width,
    hasXAxisLabels,
    hasYAxisLabels = true,
    xAxisLabelCount,
    xAxisLabelStyle,
    yAxisLabelStyle,
    hasXAxisBackgroundLines = true,
    hasYAxisBackgroundLines = true,
    xAxisBackgroundLineStyle = {
      strokeWidth: 1,
      color: '#000000'
    },
    yAxisBackgroundLineStyle = {
      strokeWidth: 1,
      color: '#000000'
    }
  }: BaseChartConfig) {
    this.data = data
    if (labels) {
      this.labels = labels
    } else {
      this.labels = [...new Array(this.data.length)].map((_, i) => i.toString())
    }

    this.startAtZero = startAtZero

    this.height = height
    this.width = width

    this.hasXAxisLabels = hasXAxisLabels,
    this.hasYAxisLabels = hasYAxisLabels

    this.xAxisLabelStyle = xAxisLabelStyle
    this.yAxisLabelStyle = yAxisLabelStyle

    this.hasXAxisBackgroundLines = hasXAxisBackgroundLines
    this.hasYAxisBackgroundLines = hasYAxisBackgroundLines

    this.yAxisBackgroundLineStyle = yAxisBackgroundLineStyle
    this.xAxisBackgroundLineStyle = xAxisBackgroundLineStyle

    this.xAxisLabelCount = xAxisLabelCount === undefined ? 4 : xAxisLabelCount

    this.maxVal = Math.max(...this.data)
    this.minVal = Math.min(...this.data)


    // default constants
    this.X_AXIS_LABEL_WIDTH = 50
    this.Y_AXIS_LABEL_HEIGHT = 50

    this.xAxisLabelWidth = this.X_AXIS_LABEL_WIDTH
    this.xAxisLabelPosition = 'left'
    this.leftAlignedXAxisLabelWidth = this.X_AXIS_LABEL_WIDTH

    this.yAxisLabelHeight = this.Y_AXIS_LABEL_HEIGHT


    if (this.yAxisLabelStyle) {
      this.yAxisLabelHeight = this.yAxisLabelStyle.height || this.yAxisLabelHeight
    }
    this.yDistanceBetweenXLabels = (height - this.yAxisLabelHeight) / (this.xAxisLabelCount)

    if (this.xAxisLabelStyle) {
      this.xAxisLabelWidth = this.xAxisLabelStyle.width || this.xAxisLabelWidth
      this.xAxisLabelPosition = this.xAxisLabelStyle.position || this.xAxisLabelPosition
      this.leftAlignedXAxisLabelWidth = this.xAxisLabelPosition === 'left' ? this.xAxisLabelWidth : 0
    }

    this.yLabelSlotWidth = (this.width - this.xAxisLabelWidth) / this.data.length

    this.deltaBetweenGreatestAndLeast = this.startAtZero ? Math.max(...this.data) || 1 : Math.max(...this.data) - Math.min(...this.data) || 1

    if (this.minVal >= 0 && this.maxVal >= 0) {
      this.baseHeight =  height
    } else if (this.minVal < 0 && this.maxVal > 0) {
      this.baseHeight = (height * this.maxVal) / this.deltaBetweenGreatestAndLeast
    } else {
      this.baseHeight = 0
    }
  }

  public calcDataPointHeight (val: number): number {
    const max: number = Math.max(...this.data)

    if (this.startAtZero) {
      return this.height * (val / this.deltaBetweenGreatestAndLeast)
    } else if (this.minVal >= 0 && max >= 0) {
      return this.height * ((val - this.minVal) / this.deltaBetweenGreatestAndLeast)
    } else {
      return this.height * ((val - max) / this.deltaBetweenGreatestAndLeast)
    }
  }

  public renderXAxisLines () {
    let color: string = '#00000'
    let strokeWidth: number = 1

    if (this.xAxisBackgroundLineStyle) {
      color = this.xAxisBackgroundLineStyle.color || color
      strokeWidth = this.xAxisBackgroundLineStyle.strokeWidth || strokeWidth
    }

    return [...new Array((this.xAxisLabelCount || 4) + 1)].map((_, i) => {
      return (
        <Line
          key={Math.random()}
          x1={this.leftAlignedXAxisLabelWidth}
          x2={this.width - (this.leftAlignedXAxisLabelWidth ?  0 : this.xAxisLabelWidth)}
          y1={this.yDistanceBetweenXLabels * i}
          y2={this.yDistanceBetweenXLabels * i}
          stroke={color}
          strokeDasharray={'5, 10'}
          strokeWidth={strokeWidth}
        />
      )
    })
  }

  public renderYAxisLines () {
    let color: string = '#00000'
    let strokeWidth: number = 1

    if (this.yAxisBackgroundLineStyle) {
      color = this.yAxisBackgroundLineStyle.color || color
      strokeWidth = this.yAxisBackgroundLineStyle.strokeWidth || strokeWidth
    }

    return [...new Array(Math.ceil(this.data.length))].map(
      (_, i) => {
        return (
          <Line
            key={Math.random()}
            x1={this.yLabelSlotWidth * i}
            x2={this.yLabelSlotWidth * i}
            y1={0}
            y2={this.baseHeight}
            stroke={color}
            strokeDasharray={'5, 10'}
            strokeWidth={strokeWidth}
          />
        )
      }
    )
  }

  public renderXAxisLabels () {
    let offset: number = 0
    let rotation: number = 0
    let fontFamily: string = Platform.OS === 'ios' ? 'Avenir Next' : 'Roboto'
    let fontSize: number = 14
    let fontWeight: number | string = 500
    let color: string = '#000000'
    let prefix: string = ''
    let suffix: string = ''
    let decimals: number = 0

    if (this.xAxisLabelStyle) {
      offset = this.xAxisLabelStyle.offset || offset
      rotation = this.xAxisLabelStyle.rotation || rotation
      fontFamily = this.xAxisLabelStyle.fontFamily || fontFamily
      fontSize = this.xAxisLabelStyle.fontSize || fontSize
      fontWeight = this.xAxisLabelStyle.fontWeight || fontWeight
      color = this.xAxisLabelStyle.color || color
      prefix = this.xAxisLabelStyle.prefix || prefix
      suffix = this.xAxisLabelStyle.suffix || suffix
      decimals = this.xAxisLabelStyle.decimals || decimals
    }

    return [...new Array(this.xAxisLabelCount + 1)].map((_, i) => {
      const label: number = this.deltaBetweenGreatestAndLeast
      / this.xAxisLabelCount
      * Math.abs(i - this.xAxisLabelCount - 1)
      + (this.startAtZero ? 0 : Math.min(...this.data))

      return (
        <Text
          rotation={rotation}
          key={Math.random()}
          x={(this.xAxisLabelPosition === 'right' ? this.width - this.xAxisLabelWidth : 0) + offset}
          y={(this.yDistanceBetweenXLabels * i) - this.yDistanceBetweenXLabels + fontSize}
          textAnchor='start'
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={color}
        >
          {`${prefix}${label.toFixed(decimals)}${suffix}`}
        </Text>
      )
    })
  }

  public renderYAxisLabels () {
    let offset: number = 0
    let rotation: number = 0
    let fontFamily: string = Platform.OS === 'ios' ? 'Avenir Next' : 'Roboto'
    let fontSize: number = 14
    let fontWeight: number | string = 500
    let color: string = '#000000'
    let position: string = 'bottom'

    if (this.yAxisLabelStyle) {
      offset = this.yAxisLabelStyle.offset || offset
      rotation = this.yAxisLabelStyle.rotation || rotation
      fontFamily = this.yAxisLabelStyle.fontFamily || fontFamily
      fontSize = this.yAxisLabelStyle.fontSize || fontSize
      fontWeight = this.yAxisLabelStyle.fontWeight || fontWeight
      color = this.yAxisLabelStyle.color || color
      position = this.yAxisLabelStyle.position || position
    }

    return this.labels.map((label, i) => {
      return (
        <Text
          rotation={rotation}
          key={Math.random()}
          x={(i * this.yLabelSlotWidth) + (this.yLabelSlotWidth / 2.1) + offset + this.leftAlignedXAxisLabelWidth}
          y={this.baseHeight - fontSize}
          textAnchor={rotation === 0 ? 'middle' : 'start'}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={color}
        >
          {label}
        </Text>
      )
    })
  }
}
