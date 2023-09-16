/// <reference types="react-scripts" />
declare type PrimitiveValue =
  | boolean
  | number
  | string
  | bigint
  | symbol
  | null
  | undefined

declare type AnyValue = PrimitiveValue | Date | AnyValue[]

declare type AnyShape = Record<string, AnyValue | AnyShape>

declare module '*.jpg'
declare module '*.png'
declare module '*.woff2'
declare module '*.ttf'
declare module '*.mp4'
