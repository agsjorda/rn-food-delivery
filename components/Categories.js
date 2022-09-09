import { Text, ScrollView } from "react-native";
import React, { Component } from "react";
import CategoryCard from "./CategoryCard";
import LunchFood from "../assets/lunchfood.png";
import Appetizers from "../assets/scrumptiosAppetizers.png";
import NewMenu from "../assets/newMenu.png";
import Salad from "../assets/salad.png";
import Soup from "../assets/soup.png";
import Dessert from "../assets/dessert.png";

export class Categories extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* Category Card */}

        <CategoryCard imgUrl={NewMenu} title="New Menu" />
        <CategoryCard imgUrl={LunchFood} title="Lunch" />
        <CategoryCard imgUrl={Appetizers} title="Appetizers" />
        <CategoryCard imgUrl={Salad} title="Salad" />
        <CategoryCard imgUrl={Soup} title="Soup" />
        <CategoryCard imgUrl={Dessert} title="Dessert" />
      </ScrollView>
    );
  }
}

export default Categories;
