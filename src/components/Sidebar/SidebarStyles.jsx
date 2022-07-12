import styled from "styled-components";

export const SideBar = styled.div`
flex: 1;
height: calc(100vh - 50px);
background-color: rgb(251,251,255);
position: sticky;
top:50px;

.sideBarIcon{
    margin-right: 5px;
    font-size: 20px !important;
}
`;

export const SideBarWrapper = styled.div`
padding: 20px;
color: #555;
`;

export const SideBarMenu = styled.div`
margin-bottom: 10px;
`;

export const SideBarTitle = styled.h3`
font-size: 13px;
color: rgb(187,187,187);
`;

export const SideBarList = styled.ul`
list-style: none;
padding: 5px;
.active {
    background-color: rgb(228,228,250);
}

`;

export const SideBarListItem = styled.li`
padding: 5px;
cursor: pointer;
display: flex;
align-items: center;
border-radius: 10px;
.active, &&:hover {
    background-color: rgb(228,228,250);
}
`;


