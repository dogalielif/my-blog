import { BannerProps } from "@/interfaces/banner";

export default function Banner(props: BannerProps): JSX.Element {
  console.log(props);
  return (
    <div>
     {
      props.itemsCollection.items.map((item) => {
        return (
          <div key={item.sys.id}>
            <span>TEST</span>
          </div>
        )
      })
     }
    </div>
  )
}