import styled from "styled-components";

export const Featured = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

export const FeaturedTitle = styled.span`
font-size: 20px;
`;

export const FeaturedMoneyContainer = styled.div`
margin: 10px 0px;
display: flex;
align-items: center;
`;

export const FeaturedMoney = styled.span`
font-size: 30px;
font-weight: bold;
`;

export const FeaturedMoneyRate = styled.span`
display: flex;
align-items: center;
margin-left: 20px;
.featuredIcon{
    font-size: 14px;
    margin-left: 5px;
    color: green;
}

.negative{
    color: red;
}

.positive{

}
`;

export const FeaturedItem = styled.div`
flex: 1;
margin: 0px 20px;
padding: 30px;
border-radius: 10px;
cursor: pointer;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`;

export const FeaturedSub = styled.div`
font-size: 15px;
color: gray;
`;
