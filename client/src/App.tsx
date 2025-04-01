import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import PrankPage from "@/pages/PrankPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={PrankPage} />
      <Route path="*">
        <PrankPage />
      </Route>
    </Switch>

  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
