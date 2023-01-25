import Carousel from "@/components/carousel/Carousel";

interface mapping {
  [key: string]: () => JSX.Element
}

const componentMapping: mapping = {
  'Carousel': Carousel
}

export default componentMapping;