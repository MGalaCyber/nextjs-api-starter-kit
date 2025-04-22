import Dashboard from "@/components/kokonutui/dashboard"
import { Preloader } from "@/components/preloader"

export default function DashboardPage() {
  return (
    <div>
      <Preloader/>
      <Dashboard />
    </div>
  )
}