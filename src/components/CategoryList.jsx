import React from "react"
import { ReactComponent as BreadIcon } from "../assets/svg/bread.svg"
import { ReactComponent as MeatIcon } from "../assets/svg/meat.svg"
import { ReactComponent as FoodIcon } from "../assets/svg/food.svg"
import { ReactComponent as FurnitureIcon } from "../assets/svg/furniture.svg"
import { ReactComponent as TelevisionIcon } from "../assets/svg/television.svg"
import { ReactComponent as HygieneIcon } from "../assets/svg/roll-hygiene.svg"
import { ReactComponent as WineIcon } from "../assets/svg/wine.svg"
import { ReactComponent as VegetablesIcon } from "../assets/svg/vegetables.svg"
import CategoryButton from "./buttons/cateogry-button/CategoryButton"

import List from "./list/List"

const categories = [
	{ icon: BreadIcon, title: "Panadería" },
	{ icon: MeatIcon, title: "Carnicería y Fiambrería" },
	{ icon: FoodIcon, title: "Comestibles" },
	{ icon: FurnitureIcon, title: "Muebleria" },
	{ icon: TelevisionIcon, title: "Electrónica y Tecnología" },
	{ icon: HygieneIcon, title: "Limpieza e Higene" },
	{ icon: WineIcon, title: "Bebidas" },
	{ icon: VegetablesIcon, title: "Verdulería" },
]
const CategoryList = () => {
	return (
		<List>
			{categories.map((category) => (
				<CategoryButton
					Icon={category.icon}
					title={category.title}
					key={category.title}
				/>
			))}
		</List>
	)
}

export default CategoryList
