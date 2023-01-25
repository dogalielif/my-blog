import BlogPost from "@/components/BlogPost";

interface mapping {
  [key: string]: () => JSX.Element
}

const componentMapping: mapping = {
  'BlogPost': BlogPost
}

export default componentMapping;