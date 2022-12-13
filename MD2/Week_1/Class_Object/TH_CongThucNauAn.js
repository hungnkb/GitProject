let recipe = {
    recipeName: 'Sườn xào chua ngọt',
    servings: 2,
    ingredients: ["400 g sườn thăn", "4 tbsp nước mắm","5 tsp đường", "5 tsp nước cốt chanh", "1/3 bát nước sôi", "Hành khô, tỏi, ớt, hành lá", "2 quả cà chua", "Hành tây (ớt chuông)"]
}

console.log("Tên món ăn: " + recipe.recipeName)
console.log("Khẩu phần ăn: " + recipe.servings)
console.log("Thành phần: ")
for (let i in recipe.ingredients) {
    console.log("- " + recipe.ingredients[i])
}