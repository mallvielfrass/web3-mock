import { mock, resetMocks, increaseBlock, getCurrentBlock } from 'src/index.evm'
import { supported } from "src/blockchains.evm"

describe('evm resetMocks (evm)', ()=> {

  supported.evm.forEach((blockchain)=>{

    describe(blockchain, ()=> {

      beforeEach(resetMocks)
      afterEach(resetMocks)

      it('initalizes the first mock', async ()=>{
        mock(blockchain)
      })

      it('makes sure that everything gets reset between tests', async ()=>{
        expect(global.ethereum).toEqual(undefined)
      })

      it('makes sure that current block is reset too', async ()=>{
        expect(getCurrentBlock()).toEqual(1)
        increaseBlock()
        expect(getCurrentBlock()).toEqual(2)
      })

      it('makes sure that current block is reset too', async ()=>{
        expect(getCurrentBlock()).toEqual(1)
        increaseBlock()
        expect(getCurrentBlock()).toEqual(2)
      })
    })
  })
})
