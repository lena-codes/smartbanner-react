import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  }
}
export default config
