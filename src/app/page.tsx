import { getFeedBack } from "@/actions/feedBack.Actions";
import FeedBackList from "@/components/FeedBackList";
import HashtagList from "@/components/HashtagList";
import Header from "@/components/Header";
import Skeleton from "@/components/Skeleton";
import { Suspense } from "react";
type FeedBackListProps={
  searchParams:{
      company:string
  }
}

export default  async function Home({searchParams}:FeedBackListProps) {
  const data = await getFeedBack(searchParams.company);
  return (

    <div className="flex md:flex-nowrap flex-wrap-reverse">
      <div className="w-full">
        <Header />
        <div className="w-full min-h-[max]  bg-primary-foreground">
          <Suspense fallback={<Skeleton />}>
            <FeedBackList   data={data} />
          </Suspense>
        </div>
      </div>
      <HashtagList />
    </div>

  );
}
