import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import axios from "axios"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { App } from "./App.tsx"

import "./index.css"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials = true

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
