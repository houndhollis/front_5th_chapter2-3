import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { Provider } from "./app/providers/index.tsx"
import { queryClient } from "./shared/api/query-client.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider client={queryClient}>
      <App />
    </Provider>
  </StrictMode>,
)
