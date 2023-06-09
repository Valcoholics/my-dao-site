import {
  useAccount,
  useDisconnect,
  useNetwork,
  useProvider,
  useSigner,
  useBalance,
  useEnsName,
  useEnsAvatar,
} from 'wagmi'
import { shortenAddress } from '../utils/shortenAddress'

export function useAuth() {
  const provider = useProvider()
  const { data: signer } = useSigner()
  const { address, isConnecting, ...rest } = useAccount()
  const { data: ensName } = useEnsName({
    address: address,
  })
  const { data: ensAvatar } = useEnsAvatar({
    address: address,
  })
  const { disconnect } = useDisconnect()
  const { chain } = useNetwork()
  const { data: balance } = useBalance({ address: address })

  return {
    provider,
    signer,
    address: address,
    ensName: ensName || shortenAddress(address),
    ensAvatar: ensAvatar,
    displayName: ensName || shortenAddress(address),
    balance: balance,
    loading: isConnecting,
    logout: disconnect,
    chain,
    ...rest,
  }
}
