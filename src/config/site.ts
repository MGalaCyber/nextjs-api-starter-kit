import {
    Workflow,
    BarChart3,
    ShieldCheckIcon,
    Users2,
    Puzzle,
    HeadsetIcon,
} from "lucide-react"

export const Main = {
    Name: "RESTful",
    SubName: ".API",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin interdum scelerisque metus sit amet malesuada. Mauris."
}

export const Features = [
    {
        title: "Feature #1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat.",
        icon: Workflow,
    },
    {
        title: "Feature #2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat.",
        icon: BarChart3,
    },
    {
        title: "Feature #3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat.",
        icon: ShieldCheckIcon,
    },
    {
        title: "Feature #4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat.",
        icon: Users2,
    },
    {
        title: "Feature #5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat.",
        icon: Puzzle,
    },
    {
        title: "Feature #6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat.",
        icon: HeadsetIcon,
    },
]

export const Pricing = []

export const System = {
    Mode: process.env.SERVER_MODE === "development" ? true : false
}