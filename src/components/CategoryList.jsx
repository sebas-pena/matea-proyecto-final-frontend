import React from "react"
import { ReactComponent as MotherboardIcon } from "../assets/svg/motherboard.svg"
import { ReactComponent as MouseIcon } from "../assets/svg/mouse.svg"
import { ReactComponent as LaptopIcon } from "../assets/svg/laptop.svg"
import { ReactComponent as TowerIcon } from "../assets/svg/pc-tower.svg"
import { ReactComponent as CpuIcon } from "../assets/svg/cpu.svg"
import { ReactComponent as GpuIcon } from "../assets/svg/gpu.svg"
import { ReactComponent as MonitorIcon } from "../assets/svg/monitor.svg"
import CategoryButton from "./buttons/cateogry-button/CategoryButton"

import List from "./list/List"
import Wrapper from "./Wrapper"

const categories = [
  { icon: MouseIcon, title: "Perifericos", path: "peripheral" },
  { icon: MotherboardIcon, title: "Motherboards", path: "motherboard" },
  { icon: CpuIcon, title: "CPU", path: "cpu" },
  { icon: GpuIcon, title: "GPU", path: "gpu" },
  { icon: MonitorIcon, title: "Monitores", path: "monitor" },
  { icon: TowerIcon, title: "Gabinetes", path: "pc-box" },
  { icon: LaptopIcon, title: "Laptops", path: "laptop" },
]
const CategoryList = () => {
  return (
    <Wrapper justify="center" gap={30} wrap="wrap">
      {categories.map((category) => (
        <CategoryButton
          Icon={category.icon}
          title={category.title}
          path={category.path}
          key={category.title}
        />
      ))}
    </Wrapper>
  )
}

export default CategoryList
