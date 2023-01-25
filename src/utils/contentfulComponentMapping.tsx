import Banner from "@/components/banner/Banner";

interface mapping {
  [key: string]: () => JSX.Element
}

const componentMapping: mapping = {
  'Banner': Banner
}

export default componentMapping;