import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import axios from "axios"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { App } from "./App.tsx"

import "./index.css"

axios.defaults.baseURL = "http://127.0.0.1:8000"
axios.defaults.withCredentials = true

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
