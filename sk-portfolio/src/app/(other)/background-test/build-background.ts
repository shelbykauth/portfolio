export type BgConfig = {
  height: number;
  width: number;
  images: ImageBitmap[];
  colors: string[];
  concentration: number;
  minSize: number;
  maxSize: number;
  minOpacity: number;
};

const allImages = preLoadAllImages();

export async function preLoadAllImages() {
  const allImages = [];
  const imageCaches: Record<string, ImageBitmap> = {};
  const imageList = ["images/bgs/jwt-single-star.png"];
  const promises = imageList.map((url) =>
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => createImageBitmap(blob))
      .then((data) => (imageCaches[url] = data))
  );
  await Promise.all(promises);

  // Todo: Colorize Stars
  allImages.push(...Object.values(imageCaches));

  return allImages;
}

/** Takes set of canvases and draws stars onto them */
export async function setupBackgrounds(
  canvases: HTMLCanvasElement[],
  configs: { distance: number; scale: number }[]
) {
  // load image
  // const response = await fetch("./images/bgs/jwt-single-star.png");
  // const body = await response.blob();
  // console.log(body);

  const imageList = await allImages;

  canvases.forEach((canvas, index) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Cannot find context");
    }
    const { distance, scale } = configs[index];
    drawSingleBackgroundLayer(ctx, {
      images: imageList,
      colors: [],
      concentration: Math.pow(distance, 2),
      height: canvas.height,
      width: canvas.width,
      minSize: 20 / scale,
      maxSize: 100 / scale,
      minOpacity: 0.1,
    });
  });
}

/** Fill Single Canvas with image data */
export async function drawSingleBackgroundLayer(
  ctx: CanvasRenderingContext2D,
  config: BgConfig
) {
  console.log(config);
  ctx.clearRect(0, 0, config.width, config.height);
  for (let i = 0; i < config.concentration; i++) {
    const brightness =
      Math.random() * (config.maxSize - config.minSize) + config.minSize;
    const size = brightness;
    const centerX = Math.random() * (config.width + size);
    const centerY = Math.random() * (config.height + size);
    const opacity = Math.random();
    const startX = centerX - size;
    const startY = centerY - size;
    ctx.drawImage(config.images[0], startX, startY, size, size);
  }
}
