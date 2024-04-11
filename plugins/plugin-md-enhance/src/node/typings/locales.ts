import type { ExactLocaleConfig } from '@vuepress/helper'
import type { MarkdownHintLocaleData } from './hint.js'

export type MarkdownLocaleData = MarkdownHintLocaleData

export type MarkdownLocaleConfig = ExactLocaleConfig<MarkdownLocaleData>
