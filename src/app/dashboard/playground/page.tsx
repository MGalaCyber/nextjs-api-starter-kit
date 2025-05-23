"use client"

import { Preloader } from "@/components/preloader"
import Layout from "@/components/dash/layout"
import dynamic from "next/dynamic"

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false })

import "swagger-ui-react/swagger-ui.css"

export default function DashboardPage() {
    return (
        <div>
            <Preloader/>
            <Layout>
                <div className="space-y-4">
                    <SwaggerUI url="/endpoints" />
                </div>
            </Layout>
        </div>
    )
}