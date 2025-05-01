import { BrowserRouter as Router } from "react-router-dom"
import Header from "./widgets/ui/Header.tsx"
import Footer from "./widgets/ui/Footer.tsx"
import PostsManagerPage from "./pages/PostsManagerPage.tsx"
import { Provider } from "./app/providers/index.tsx"
import { queryClient } from "./shared/api/query-client.ts"
import { QueryParamsProvider } from "./app/providers/QueryParamsProvider.tsx"
import { PostDataProvider } from "./features/post/query/PostDataProvider.tsx"
import { AllUserProvider } from "./features/post/query/AllUserProvider.tsx"

const App = () => {
  return (
    <Router>
      <Provider client={queryClient}>
        <QueryParamsProvider>
          <AllUserProvider>
            <PostDataProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">
                  <PostsManagerPage />
                </main>
                <Footer />
              </div>
            </PostDataProvider>
          </AllUserProvider>
        </QueryParamsProvider>
      </Provider>
    </Router>
  )
}

export default App
