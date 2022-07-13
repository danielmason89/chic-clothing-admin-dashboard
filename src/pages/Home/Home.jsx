import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import { Home, HomeWidgets } from "./HomeStyles";
import { userData } from "../../dashBoardData";
import { WidgetSm } from "../../components/WidgetSm/WidgetsSm";
import { WidgetLg } from "../../components/WidgetLg/WidgetsLg";


export default function HomePage() {
    return (
        <Home>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <HomeWidgets>
                <WidgetSm />
                <WidgetLg />
            </HomeWidgets>
        </Home>
    )
}
