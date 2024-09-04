/* eslint-env mocha */

import { generateKeyPair } from '@libp2p/crypto/keys'
import suite from '@libp2p/interface-compliance-tests/connection-encryption'
import { defaultLogger } from '@libp2p/logger'
import { tls } from '../src/index.js'

describe('tls compliance', () => {
  suite({
    async setup (opts) {
      return tls()({
        privateKey: opts?.privateKey ?? await generateKeyPair('Ed25519'),
        logger: defaultLogger()
      })
    },
    async teardown () {

    }
  })
})
