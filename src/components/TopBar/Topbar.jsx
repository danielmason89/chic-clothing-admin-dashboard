import { TopBar, TopbarWrapper, TopLeft, TopRight, Logo, TopbarIconContainer, TopIconBadge, Avatar } from "./TopbarStyles";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <TopBar>
            <TopbarWrapper>
                <TopLeft>
                    <Logo>ChicAdmin</Logo>
                </TopLeft>
                <TopRight>
                    <TopbarIconContainer>
                        < NotificationsNone />
                        <TopIconBadge>2</TopIconBadge>
                    </TopbarIconContainer>
                    <TopbarIconContainer>
                        < Language />
                        <TopIconBadge>2</TopIconBadge>
                    </TopbarIconContainer>
                    <TopbarIconContainer>
                        < Settings />
                    </TopbarIconContainer>
                    <Avatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Asian Woman" />
                </TopRight>
            </TopbarWrapper>
        </TopBar>
    )
}
