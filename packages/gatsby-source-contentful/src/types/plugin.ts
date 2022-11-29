import { PluginOptions } from "gatsby"

export interface IPluginOptions extends Partial<PluginOptions> {
  host: string
  environment: string
  downloadLocal: boolean
  localeFilter: () => boolean
  contentTypeFilter: () => boolean
  pageLimit: number
  useNameForId: boolean
}

export interface IProcessedPluginOptions {
  get: (key: keyof IPluginOptions) => any
  getOriginalPluginOptions: () => IPluginOptions
}
