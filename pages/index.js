import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect , useState} from "react";




export default function Home({products}) {
    
    // const [data, setData] = useState(null);
    // useEffect(()=> {
    //     fetchProducts();
    // },[])

    // const fetchProducts = async () => {
    //     const {data} =await fetchDataFromApi('/api/products');
    //     setData(data) ;
    // }



    return <main>
        <HeroBanner/>
        <h1>{products?.data?.[0]?.attributes?.name}</h1>
        <Wrapper>
            {/* HEADING & PARAGRAPH START  */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Shoe Amazing WoW</div>
                <div className="text-md md:text-xl">Men sad men see shoe men heppy 
                lorem ipsum dolor simet lorem ipsum dolor simet Men sad men see shoe men
                 heppy lorem ipsum dolor simet lorem ipsum dolor simet</div>
            </div>
            {/* HEADING & PARAGRAPH END */}


            {/* product grid start */}
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            {/* product grid end  */}

        </Wrapper>
    
    </main>;
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}
