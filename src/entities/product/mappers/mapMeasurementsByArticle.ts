import { tColor, tItem, tMeasurements } from "../product";

export const mapMeasurementsByArticle = (data: tItem, article: string) => {
  const findItem: tColor = data.colors.find((obj) => obj.article === article);

  if (findItem) {
    const measurements: tMeasurements = data.measurements.image
      ? data.measurements
      : { ...data.measurements, image: findItem.images[0] };

    return measurements as tMeasurements;
  }
  return {};
};
