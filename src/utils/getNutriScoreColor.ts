// Función helper para obtener el color del badge según el score
export const getNutriScoreColor = (score: string) => {
  switch (score.toUpperCase()) {
    case "A":
      return "#16a34a"; // green-600
    case "B":
      return "#22c55e"; // green-500
    case "C":
      return "#eab308"; // yellow-500
    case "D":
      return "#f59e0b"; // amber-500
    case "E":
      return "#ef4444"; // red-500
    default:
      return "#16a34a";
  }
};
