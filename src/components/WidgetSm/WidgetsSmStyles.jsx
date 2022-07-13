import styled from "styled-components";

export const WidgeSm = styled.div`
flex: 1;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
padding: 20px;
margin-right: 20px;
.widgeSmIcon{
    font-size: 16px;
    margin-right: 5px;
}
`;

export const WidgeSmListItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0px;
`;

export const WidgeSmImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`;

export const WidgeSmUser = styled.div`
display: flex;
flex-direction: column;
`;

export const WidgeSmUserName = styled.span`
font-weight: 600;
`;

export const WidgeSmUserTitle = styled.span`
font-weight: 300;
`;

export const WidgeSmButton = styled.button`
display: flex;
align-items: center;
border: none;
border-radius: 10px;
padding: 7px 10px;
background-color: #eeeef7;
color: #555;
cursor: pointer;

`;

export const WidgeSmList = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`;

export const WidgeSmTitle = styled.span`
font-size: 32px;
font-weight: 600;
`;

