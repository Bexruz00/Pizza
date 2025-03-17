import Categories from "@/modules/Categories";
import Header from "@/modules/Header";
import Products from "@/modules/Products";

export default function Home() {
  return(
    <div className="bg-white p-[43px] rounded-[10px]">
      <Header/>
      <Categories/>
      <Products/>
    </div>
  )
}
