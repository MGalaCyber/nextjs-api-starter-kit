import Dashboard from "@/components/dash/dashboard"
import { Preloader } from "@/components/preloader"

export default function DashboardPage() {
  return (
    <div>
      <Preloader/>
      <Dashboard />
    </div>
  )
}