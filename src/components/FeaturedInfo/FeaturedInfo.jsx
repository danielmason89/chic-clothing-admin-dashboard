import { Featured, FeaturedMoney, FeaturedMoneyContainer, FeaturedTitle, FeaturedMoneyRate, FeaturedItem, FeaturedSub } from "./FeaturedInfoStyles";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
    return (
        <Featured>
            <FeaturedItem>
                <FeaturedTitle>Revenue</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$2,780</FeaturedMoney>
                    <FeaturedMoneyRate>-11.40 <ArrowDownward className="featuredIcon negative" /></FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Sales</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$4,780</FeaturedMoney>
                    <FeaturedMoneyRate>-1.40 <ArrowDownward className="featuredIcon negative" /></FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last month</FeaturedSub>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedTitle>Cost</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>$2,250</FeaturedMoney>
                    <FeaturedMoneyRate>+2.40 <ArrowUpward className="featuredIcon" /></FeaturedMoneyRate>
                </FeaturedMoneyContainer>
                <FeaturedSub>Compared to last month</FeaturedSub>
            </FeaturedItem>
        </Featured>
    )
}
