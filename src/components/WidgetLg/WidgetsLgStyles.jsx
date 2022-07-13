import styled from "styled-components";

export const WidgeLg = styled.div`
flex: 2;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75); 
box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
padding: 20px ;
.widgeLgButton{
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
}
.widgeLgButton.Approved{
    background-color:#e5faf2;
    color: #3bb077;
}
.widgeLgButton.Declined{
    background-color:#fff0f1;
    color: #d95087;
}
.widgeLgButton.Pending{
    background-color:#ebf1fe;
    color: #2a7ade;
}
`;

export const WidgeLgTitle = styled.h3`
Font-size: 22px;
font-weight: 600;
`;

export const WidgeLgTable = styled.table`
width:100%;
border-spacing: 20px
`;

export const WidgeLgTr = styled.tr``;

export const WidgeLgTh = styled.th`
text-align: left;
`;

export const WidgeLgUser = styled.td`
display: flex;
align-items: center;
font-weight: 600;
`;

export const WidgeLgImg = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit:cover;
margin-right: 10px;
`;

export const WidgeLgName = styled.span``;

export const WidgeLgDate = styled.td`
font-weight:300;
`;

export const WidgeLgAmount = styled.td`
font-weight:300;
`;

export const WidgeLgStatus = styled.td``;

export const WidgeLgTbody = styled.tbody``;