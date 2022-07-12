import { SideBar, SideBarWrapper, SideBarTitle, SideBarMenu, SideBarList, SideBarListItem } from "./SidebarStyles";
import { AttachMoneyOutlined, BarChart, ChatBubbleOutline, DynamicFeedOutlined, LineStyle, MailOutlined, PersonOutlined, Report, StorefrontOutlined, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material';

export default function Sidebar() {
    return (
        <SideBar>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarTitle>Dashboard</SideBarTitle>
                    <SideBarList>
                        <SideBarListItem className="active">
                            <LineStyle className="sideBarIcon" />
                            Home
                        </SideBarListItem>
                        <SideBarListItem>
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </SideBarListItem>
                        <SideBarListItem>
                            <TrendingUp className="sideBarIcon" />
                            Sales
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarTitle>QuickMenu</SideBarTitle>
                    <SideBarList>
                        <SideBarListItem >
                            <PersonOutlined className="sideBarIcon" />
                            Users
                        </SideBarListItem>
                        <SideBarListItem>
                            <StorefrontOutlined className="sideBarIcon" />
                            Products
                        </SideBarListItem>
                        <SideBarListItem>
                            <AttachMoneyOutlined className="sideBarIcon" />
                            Transactions
                        </SideBarListItem>
                        <SideBarListItem>
                            <BarChart className="sideBarIcon" />
                            Reports
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarTitle>Notifications</SideBarTitle>
                    <SideBarList>
                        <SideBarListItem>
                            <MailOutlined className="sideBarIcon" />
                            Mail
                        </SideBarListItem>
                        <SideBarListItem>
                            <DynamicFeedOutlined className="sideBarIcon" />
                            Feedback
                        </SideBarListItem>
                        <SideBarListItem>
                            <ChatBubbleOutline className="sideBarIcon" />
                            Messages
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarTitle>Staff</SideBarTitle>
                    <SideBarList>
                        <SideBarListItem>
                            <WorkOutline className="sideBarIcon" />
                            Manage
                        </SideBarListItem>
                        <SideBarListItem>
                            <Timeline className="sideBarIcon" />
                            Analytics
                        </SideBarListItem>
                        <SideBarListItem>
                            <Report className="sideBarIcon" />
                            Reports
                        </SideBarListItem>
                    </SideBarList>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBar>
    )
}
