import HomeView from "./View";
import useHomeModel from "./Model";

const HomePage = () => {
  const homeData = useHomeModel();
  return (
    <div>
      <HomeView homeData={homeData} />
    </div>
  );
};

export default HomePage;
