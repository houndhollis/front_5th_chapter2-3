import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface Props {
  client: QueryClient
  children: React.ReactNode
}

export const Provider = ({ client, children }: Props) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
